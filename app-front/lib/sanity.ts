const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_PROJECT_ID ??
  "gv1jafxm";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

export type SiteSettings = {
  siteTitle?: string;
  siteDescription?: string;
  bookingUrl?: string;
  phone?: string;
  instagram?: string;
  seoTitle?: string;
  seoDescription?: string;
  logo?: {
    alt?: string;
    asset?: {
      url?: string;
    };
  };
};

const siteSettingsQuery = encodeURIComponent(
  '*[_type == "siteSettings"][0]{siteTitle,siteDescription,bookingUrl,phone,instagram,seoTitle,seoDescription,logo{alt,asset->{url}}}',
);

export async function getSiteSettings() {
  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${siteSettingsQuery}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { result: SiteSettings | null };

  return payload.result;
}
