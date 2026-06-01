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

export type HomePageData = {
  heroTitle?: string;
  heroText?: string;
  heroImage?: {
    alt?: string;
    asset?: {
      url?: string;
    };
  };
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  highlights?: string[];
  featuredServices?: Array<{
    title?: string;
    description?: string;
    price?: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  }>;
  about?: {
    title?: string;
    text?: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
  testimonials?: Array<{
    quote?: string;
    author?: string;
  }>;
};

export type ContactPageData = {
  title?: string;
  intro?: string;
  phone?: string;
  instagram?: string;
  email?: string;
  address?: string;
  openingHours?: string;
  bookingUrl?: string;
  mapUrl?: string;
};

const siteSettingsQuery = encodeURIComponent(
  '*[_type == "siteSettings"][0]{siteTitle,siteDescription,bookingUrl,phone,instagram,seoTitle,seoDescription,logo{alt,asset->{url}}}',
);

const homePageQuery = encodeURIComponent(
  '*[_type == "homePage"][0]{heroTitle,heroText,heroImage{alt,asset->{url}},primaryCtaLabel,primaryCtaHref,secondaryCtaLabel,secondaryCtaHref,highlights,featuredServices[]{title,description,price,image{asset->{url}}},about{title,text,image{asset->{url}}},testimonials[]{quote,author}}',
);

const contactPageQuery = encodeURIComponent(
  '*[_type == "contactPage"][0]{title,intro,phone,instagram,email,address,openingHours,bookingUrl,mapUrl}',
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

export async function getHomePage() {
  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${homePageQuery}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { result: HomePageData | null };

  return payload.result;
}

export async function getContactPage() {
  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${contactPageQuery}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { result: ContactPageData | null };

  return payload.result;
}
