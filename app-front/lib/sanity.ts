import { cache } from "react";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_PROJECT_ID ??
  "gv1jafxm";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

export type SiteSettings = {
  siteTitle?: string;
  siteDescription?: string;
  address?: string;
  openingHours?: string;
  bookingUrl?: string;
  phone?: string;
  email?: string;
  socialMedia?: {
    instagram?: {
      label?: string;
      url?: string;
    };
    facebook?: {
      label?: string;
      url?: string;
    };
  };
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
  ctas?: Array<{
    label?: string;
    href?: string;
  }>;
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
};

export type ServicePageData = {
  title?: string;
  services?: Array<{
    title?: string;
    image?: {
      alt?: string;
      asset?: {
        url?: string;
      };
    };
    services?: Array<{
      name?: string;
      description?: string;
      price?: string;
    }>;
  }>;
};

const siteSettingsQuery = encodeURIComponent(
  '*[_type == "siteSettings"][0]{siteTitle,siteDescription,address,openingHours,bookingUrl,phone,email,instagram,seoTitle,seoDescription,socialMedia{instagram{label,url},facebook{label,url}},logo{alt,asset->{url}}}',
);

const homePageQuery = encodeURIComponent(
  '*[_type == "homePage"][0]{heroTitle,heroText,heroImage{alt,asset->{url}},ctas[]{label,"href":select(href->_type == "homePage" => "/",href->_type == "servicePage" => "/servicios",href->_type == "contactPage" => "/contacto",null)},highlights,featuredServices[]{title,description,price,image{asset->{url}}},about{title,text,image{asset->{url}}},testimonials[]{quote,author}}',
);

const contactPageQuery = encodeURIComponent(
  '*[_type == "contactPage"][0]{title,intro}',
);

const servicePageQuery = encodeURIComponent(
  '*[_type == "servicePage"][0]{title,services[]{title,image{alt,asset->{url}},services[]{name,description,price}}}',
);

export const getSiteSettings = cache(async function getSiteSettings() {
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
});

export const getHomePage = cache(async function getHomePage() {
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
});

export const getContactPage = cache(async function getContactPage() {
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
});

export const getServicePage = cache(async function getServicePage() {
  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${servicePageQuery}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { result: ServicePageData | null };

  return payload.result;
});
