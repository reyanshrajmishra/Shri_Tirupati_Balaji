export const updateSEO = (title, description, canonicalUrl = window.location.href) => {
  if (title) document.title = title;

  if (description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);
};

export const addStructuredData = (data) => {
  const existing = document.getElementById('structured-data');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.id = 'structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const seoData = {
  title: "Shri Tirupati Balaji Communications | Mobile Repair in Etawah",
  description: "Shri Tirupati Balaji Communications offers professional mobile phone repair services in Etawah, UP. Screen replacement, battery repair, software installation, water damage recovery & more. 15+ years experience, genuine parts, same-day repairs.",
  keywords: "mobile repair Etawah, phone repair Etawah, screen replacement Etawah, battery replacement, water damage repair, Shri Tirupati Balaji, phone repair near me, best repair shop Etawah, Uttar Pradesh",

  structuredData: {
    "@context": "https://schema.org",
    "@type": "ElectronicsRepair",
    "name": "Shri Tirupati Balaji Communications",
    "image": "https://shritirupatibalaji.in/SHOP_LOGO.jpeg",
    "url": "https://shritirupatibalaji.in",
    "telephone": "+919219119832",
    "email": "balajietw5@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vijay Nagar chauraha, Friends Colony",
      "addressLocality": "Etawah",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "206001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.7489,
      "longitude": 79.0458
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.1",
      "reviewCount": "12",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.google.com/maps/search/?api=1&query=Shri+Tirupati+Balaji+Communication+Etawah"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Repair Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screen Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Damage Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tempered Glass Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Accessories" } }
      ]
    }
  }
};
