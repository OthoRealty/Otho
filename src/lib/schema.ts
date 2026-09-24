import { ProjectReview } from '@/types';

const BASE_URL = 'https://otho.co.in';

export function generateOrganizationSchema() {
  return {
    '@type': 'RealEstateAgent',
    '@id': `${BASE_URL}/#organization`,
    name: 'OTHO Realty',
    alternateName: 'Otho Advisory & Consultancy',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/otho-crest-logo.jpg`,
    description: "Hyderabad's premier independent real estate advisory. Fiduciary-grade project intelligence and transparent analysis.",
    telephone: '+919949041919',
    email: 'contact@otho.co.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E5, Tapasya Apartments, behind ICICI Bank, opp. Rockwell International School',
      addressLocality: 'Kokapet',
      addressRegion: 'Telangana',
      postalCode: '500075',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.4023,
      longitude: 78.3555,
    },
    sameAs: [
      'https://www.youtube.com/@OthoRealty',
      'https://www.google.com/maps/place/Otho+Realty+Pvt+Ltd/',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad',
      containedInPlace: {
        '@type': 'State',
        name: 'Telangana',
      },
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'OTHO Realty',
    description: 'Real Estate. With a clearer perspective.',
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function generateProjectSchema(project: ProjectReview) {
  const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);
  return {
    '@type': 'RealEstateListing',
    '@id': `${BASE_URL}/curation/${project.slug}`,
    name: project.name,
    description: project.summary,
    url: `${BASE_URL}/curation/${project.slug}`,
    image: project.image,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
      },
      description: project.priceRangeCr,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: project.locality,
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Loading Factor',
        value: `${loadingFactor}%`,
      },
      {
        '@type': 'PropertyValue',
        name: 'RERA Carpet Area',
        value: `${project.carpet} sq ft`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Super Built-Up Area',
        value: `${project.sba} sq ft`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Developer',
        value: project.developer,
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function wrapInGraph(...schemas: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
