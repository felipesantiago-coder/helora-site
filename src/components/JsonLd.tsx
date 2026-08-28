/**
 * Renders a <script type="application/ld+json"> with the given structured data.
 * Safe to use in server components (no client-side JS).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
