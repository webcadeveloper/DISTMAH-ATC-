import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'course';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  price?: number;
  currency?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com';
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'DISTMAH ATC - Universidad Autodesk';

  const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: config.author ? [{ name: config.author }] : undefined,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.url || baseUrl,
      siteName: appName,
      images: config.image
        ? [
            {
              url: config.image,
              width: 1200,
              height: 630,
              alt: config.title,
            },
          ]
        : undefined,
      locale: 'es_VE',
      alternateLocale: ['en_US'],
      type: (config.type === 'course' ? 'article' : config.type) || 'website',
      publishedTime: config.publishedTime,
      modifiedTime: config.modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.image ? [config.image] : undefined,
      creator: '@DISTMAH_ATC',
      site: '@DISTMAH_ATC',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: config.url || baseUrl,
      languages: {
        es: config.url ? `${config.url}?lang=es` : `${baseUrl}?lang=es`,
        en: config.url ? `${config.url}?lang=en` : `${baseUrl}?lang=en`,
      },
    },
  };

  return metadata;
}

export interface CourseStructuredData {
  name: string;
  description: string;
  provider: string;
  image: string;
  price: number;
  currency: string;
  duration: string;
  instructor: string;
  category: string;
  level: string;
  url: string;
  rating?: number;
  reviewCount?: number;
}

export function generateCourseStructuredData(course: CourseStructuredData) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider || 'DISTMAH ATC',
      sameAs: baseUrl,
    },
    image: course.image,
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: course.currency || 'USD',
      availability: 'https://schema.org/InStock',
      url: course.url,
      validFrom: new Date().toISOString(),
    },
    timeRequired: course.duration,
    educationalLevel: course.level,
    courseWorkload: course.duration,
    teaches: course.category,
    instructor: {
      '@type': 'Person',
      name: course.instructor,
    },
    ...(course.rating && course.reviewCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: course.rating,
            reviewCount: course.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

export interface OrganizationStructuredData {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactEmail: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export function generateOrganizationStructuredData(org: OrganizationStructuredData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    description: org.description,
    email: org.contactEmail,
    ...(org.socialMedia
      ? {
          sameAs: Object.values(org.socialMedia).filter(Boolean),
        }
      : {}),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VE',
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
