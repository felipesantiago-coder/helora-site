import { PrismaClient } from '@prisma/client'

/**
 * Single lazy, memoized Prisma client.
 *
 * - In production: requires TURSO_DATABASE_URL and TURSO_AUTH_TOKEN;
 *   connects to Turso (libSQL) with the PrismaLibSQL adapter.
 *   Fails explicitly if variables are missing or connection fails.
 *
 * - In development: if TURSO_DATABASE_URL is set, uses Turso;
 *   otherwise falls back to local SQLite (for local dev only).
 *
 * The client is memoized per process/serverless function via globalThis
 * to avoid connection leaks during hot-reload.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const logConfig =
  process.env.NODE_ENV === 'development'
    ? (['error', 'warn'] as const)
    : []

async function createPrismaClient(): Promise<PrismaClient> {
  const tursoUrl = process.env.TURSO_DATABASE_URL
  const tursoAuthToken = process.env.TURSO_AUTH_TOKEN

  if (tursoUrl) {
    try {
      const { PrismaLibSQL } = await import('@prisma/adapter-libsql')

      const adapter = new PrismaLibSQL({
        url: tursoUrl,
        ...(tursoAuthToken ? { authToken: tursoAuthToken } : {}),
      })
      const client = new PrismaClient({ adapter, log: [...logConfig] })

      await client.$queryRaw`SELECT 1`
      console.log('[DB] Connected to Turso successfully')

      return client
    } catch (err) {
      console.error('[DB] Failed to connect to Turso:', err)
      throw new Error(
        `[DB] Turso connection failed: ${err instanceof Error ? err.message : String(err)}. ` +
          'Check TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in your Vercel environment variables.'
      )
    }
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      '[DB] TURSO_DATABASE_URL is required in production. ' +
        'Local SQLite cannot be used on Vercel (ephemeral filesystem). ' +
        'Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in your Vercel environment variables.'
    )
  }

  // Dev-only fallback to local SQLite
  console.log('[DB] Using local SQLite (development only)')
  return new PrismaClient({ log: [...logConfig] })
}

/**
 * Get the singleton Prisma client.
 * Lazily creates on first call, then memoizes via globalThis.
 */
export async function getDb(): Promise<PrismaClient> {
  if (globalForPrisma.prisma) return globalForPrisma.prisma

  const client = await createPrismaClient()
  globalForPrisma.prisma = client

  return client
}

/**
 * Synchronous export for convenience in routes that can't be async.
 * Only use AFTER getDb() has been called at least once, or in dev
 * where the local SQLite fallback is available.
 * Prefer getDb() in all new code.
 */
export const db = globalForPrisma.prisma ?? new PrismaClient({ log: [...logConfig] })
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
