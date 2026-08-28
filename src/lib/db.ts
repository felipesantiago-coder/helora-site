import { PrismaClient } from '@prisma/client'

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

  return new PrismaClient({ log: [...logConfig] })
}

const localDb =
  globalForPrisma.prisma ?? new PrismaClient({ log: [...logConfig] })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = localDb

export const db = localDb

let _cachedClient: PrismaClient | null = null

export async function getDb(): Promise<PrismaClient> {
  if (_cachedClient) return _cachedClient

  const client = await createPrismaClient()
  _cachedClient = client

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client
  }

  return client
}
