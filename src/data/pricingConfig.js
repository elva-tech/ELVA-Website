/**
 * Single source of truth for every price shown on /pricing-plans.
 * Update values here only — no component should hard-code a price.
 */

const inr = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0
});

export function formatINR(amount) {
  return `₹${inr.format(amount)}`;
}

/** Annual plans are priced below 12x monthly; this is the customer's saving. */
export function annualSaving(monthly, annual) {
  if (!monthly || !annual) return null;
  const saving = monthly * 12 - annual;
  return saving > 0 ? saving : null;
}

export const pricingConfig = {

  development: {
    website: { price: 15000, billing: "one-time" },
    websitePro: { price: 30000, billing: "one-time" },
    webApplication: { price: 75000, prefix: "From", billing: "one-time" },
    mobileApplication: { price: 150000, prefix: "From", billing: "one-time" },
    businessPlatform: { price: 250000, prefix: "From", billing: "one-time" },
    customPlatform: { price: 300000, prefix: "From", billing: "one-time" }
  },

  recurring: {
    website: {
      essential: { annual: 6000 },
      managed: { annual: 12000 }
    },
    application: {
      essential: { monthly: 6000, annual: 60000 },
      managed: { monthly: 12000, annual: 120000 },
      business: { monthly: 20000, annual: 200000 }
    },
    platform: {
      standard: { monthly: 15000, annual: 150000 },
      managed: { monthly: 25000, annual: 250000 },
      businessCritical: { monthly: 40000, annual: 400000 }
    }
  },

  additionalServices: {
    websitePage: 2500,
    paymentGateway: 10000,
    whatsapp: 10000,
    smsOtp: 7500,
    maps: 10000,
    advancedReports: 15000,
    additionalUserRole: 10000,
    thirdPartyApi: 10000,
    aiFeature: 25000,
    additionalMobileApp: 50000,
    customDashboard: 20000,
    dataMigration: 10000
  }

};

/* ---------- BUILD / OPERATE / EXTEND ---------- */

export const pricingModels = [
  {
    tag: "Build",
    title: "One-Time Development",
    description:
      "Design, development, testing and initial deployment of your digital product.",
    examples: [
      "Websites",
      "Web applications",
      "Mobile applications",
      "Business platforms",
      "Custom software"
    ]
  },
  {
    tag: "Operate",
    title: "Recurring ELVA Services",
    description:
      "Ongoing hosting, monitoring, maintenance and technical support after launch. Recurring pricing depends on the type and operational complexity of your product.",
    examples: []
  },
  {
    tag: "Extend",
    title: "Additional & Usage-Based Services",
    description:
      "Add new capabilities or use third-party services as your business grows.",
    examples: [
      "Integrations",
      "AI",
      "SMS",
      "WhatsApp",
      "Payments",
      "Maps",
      "Cloud infrastructure"
    ]
  }
];

/* ---------- ONE-TIME DEVELOPMENT CARDS ---------- */

const dev = pricingConfig.development;

export const developmentPlans = [
  {
    id: "website",
    category: "Website",
    name: "Business Website",
    price: dev.website.price,
    billingLabel: "one-time",
    description: "For businesses that need a professional online presence.",
    featuresLabel: "Includes",
    features: [
      "Up to 3 pages",
      "Responsive design",
      "Mobile and desktop optimization",
      "Basic SEO",
      "Contact / WhatsApp CTA",
      "Deployment",
      "SSL"
    ],
    useCases: [
      "Small businesses",
      "Local businesses",
      "Professionals",
      "Service businesses"
    ],
    cta: "Get Started"
  },
  {
    id: "websitePro",
    category: "Website",
    name: "Business Website Pro",
    price: dev.websitePro.price,
    billingLabel: "one-time",
    description: "For businesses that need a more complete website.",
    featuresLabel: "Includes",
    features: [
      "5–8 pages",
      "Custom UI design",
      "Responsive development",
      "Basic SEO",
      "Contact forms",
      "Analytics",
      "Deployment",
      "SSL"
    ],
    useCases: [
      "Established businesses",
      "Organizations",
      "Professional firms",
      "Growing companies"
    ],
    cta: "Get Started"
  },
  {
    id: "webApplication",
    category: "Application",
    name: "Web Application",
    price: dev.webApplication.price,
    pricePrefix: dev.webApplication.prefix,
    billingLabel: "one-time",
    description: "Turn a business process into a digital workflow.",
    featuresLabel: "Includes, depending on scope",
    features: [
      "User authentication",
      "Database",
      "Business workflows",
      "Admin dashboard",
      "REST APIs",
      "Reports",
      "Deployment"
    ],
    useCases: [
      "Internal business applications",
      "Customer portals",
      "Workflow systems",
      "Replacing Excel / manual processes",
      "Business dashboards"
    ],
    cta: "Discuss Your Application"
  },
  {
    id: "mobileApplication",
    category: "Mobile",
    name: "Mobile Application",
    price: dev.mobileApplication.price,
    pricePrefix: dev.mobileApplication.prefix,
    billingLabel: "one-time",
    description:
      "Build a mobile experience for customers, employees or partners.",
    featuresLabel: "Includes, depending on scope",
    features: [
      "Android / iOS application",
      "User authentication",
      "API integration",
      "Push notifications",
      "Backend integration",
      "App deployment"
    ],
    useCases: [
      "Customer apps",
      "Employee apps",
      "Field applications",
      "Partner applications",
      "Delivery applications"
    ],
    cta: "Discuss Your App"
  },
  {
    id: "businessPlatform",
    category: "Platform",
    name: "Business Platform",
    price: dev.businessPlatform.price,
    pricePrefix: dev.businessPlatform.prefix,
    billingLabel: "one-time",
    label: "Popular",
    description:
      "A complete digital system connecting customers, employees and business operations.",
    featuresLabel: "Includes, depending on scope",
    features: [
      "Customer application",
      "Admin dashboard",
      "Backend APIs",
      "Database",
      "Role-based access",
      "Business workflows",
      "Reports",
      "Deployment"
    ],
    useCases: [
      "Business management systems",
      "Customer + admin platforms",
      "Aggregator platforms",
      "Operational platforms",
      "Multi-role applications"
    ],
    cta: "Build Your Platform"
  },
  {
    id: "customPlatform",
    category: "Custom",
    name: "Custom Platform",
    price: dev.customPlatform.price,
    pricePrefix: dev.customPlatform.prefix,
    billingLabel: "one-time",
    description:
      "For complex requirements that do not fit into a standard package.",
    featuresLabel: "Examples",
    features: [
      "Multiple applications",
      "Enterprise integrations",
      "AI systems",
      "Automation",
      "Advanced analytics",
      "Data platforms",
      "Complex workflows",
      "Custom enterprise software"
    ],
    useCases: [],
    cta: "Talk to ELVA"
  }
];

/* ---------- RECURRING PLAN GROUPS ---------- */

const rec = pricingConfig.recurring;

export const careGroups = [
  {
    id: "website",
    heading: "Website Care",
    description:
      "For websites and digital presence solutions where ELVA manages hosting, deployment and ongoing technical maintenance.",
    billingNote: "Website Care is billed annually.",
    footnote:
      "Website Care does not include unlimited design or content changes. Major redesigns, new pages or new functionality are treated as additional development.",
    plans: [
      {
        name: "Essential",
        annual: rec.website.essential.annual,
        featuresLabel: "Includes",
        features: [
          "Hosting",
          "SSL",
          "Automated backups",
          "Uptime monitoring",
          "Security updates",
          "Basic technical support",
          "Bug fixes related to the delivered website"
        ]
      },
      {
        name: "Managed",
        annual: rec.website.managed.annual,
        label: "Recommended",
        featuresLabel: "Everything in Essential, plus",
        features: [
          "Minor content updates",
          "Priority support",
          "Monthly health check",
          "Performance monitoring",
          "Dependency updates",
          "Minor technical improvements"
        ]
      }
    ]
  },
  {
    id: "application",
    heading: "Application Care",
    description:
      "For web applications, portals and business software where ELVA operates the backend, APIs, database and application infrastructure.",
    billingNote: "Application Care can be billed monthly or annually.",
    plans: [
      {
        name: "Essential",
        monthly: rec.application.essential.monthly,
        annual: rec.application.essential.annual,
        featuresLabel: "Includes",
        features: [
          "Application hosting",
          "Backend hosting",
          "Database hosting",
          "SSL",
          "Backups",
          "Monitoring",
          "Security updates",
          "Bug fixes"
        ]
      },
      {
        name: "Managed",
        monthly: rec.application.managed.monthly,
        annual: rec.application.managed.annual,
        label: "Most Popular",
        featuresLabel: "Everything in Essential, plus",
        features: [
          "Priority support",
          "Database maintenance",
          "Performance monitoring",
          "Monthly application health check",
          "Minor configuration changes",
          "Dependency management",
          "Minor application updates"
        ]
      },
      {
        name: "Business",
        monthly: rec.application.business.monthly,
        annual: rec.application.business.annual,
        featuresLabel: "Everything in Managed, plus",
        features: [
          "Priority incident response",
          "Advanced monitoring",
          "Performance optimization",
          "Database optimization",
          "Monthly technical report",
          "Defined support response targets",
          "Up to 4 hours of minor development/support per month",
          "Priority bug resolution"
        ],
        recommendedFor: "Business-critical applications."
      }
    ]
  },
  {
    id: "platform",
    heading: "Platform Care",
    description:
      "For complete business platforms involving multiple applications, backend services, databases, administration systems and operational workflows.",
    billingNote: "Platform Care can be billed monthly or annually.",
    plans: [
      {
        name: "Standard",
        monthly: rec.platform.standard.monthly,
        annual: rec.platform.standard.annual,
        featuresLabel: "Includes",
        features: [
          "Infrastructure management",
          "Application hosting",
          "Backend / API hosting",
          "Database management",
          "Backups",
          "Monitoring",
          "Security updates",
          "Basic technical support"
        ]
      },
      {
        name: "Managed",
        monthly: rec.platform.managed.monthly,
        annual: rec.platform.managed.annual,
        label: "Most Popular",
        featuresLabel: "Everything in Standard, plus",
        features: [
          "Priority support",
          "Performance monitoring",
          "Database maintenance",
          "Application maintenance",
          "Monthly health check",
          "Minor configuration changes",
          "Minor improvements"
        ]
      },
      {
        name: "Business Critical",
        monthly: rec.platform.businessCritical.monthly,
        annual: rec.platform.businessCritical.annual,
        featuresLabel: "Everything in Managed, plus",
        features: [
          "Priority incident response",
          "Advanced monitoring",
          "Performance optimization",
          "Security review",
          "Database optimization",
          "Technical reporting",
          "Defined support response targets",
          "Dedicated technical coordination"
        ],
        recommendedFor:
          "Platforms that are critical to daily business operations."
      }
    ]
  }
];

const slugify = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* A stable slug per recurring plan, so CTA links and labels cannot drift apart. */
careGroups.forEach((group) => {
  group.plans.forEach((plan) => {
    plan.slug = `${group.id}-${slugify(plan.name)}`;
  });
});

/** Flat rows for the quick-comparison table, derived from careGroups. */
export const recurringComparison = careGroups.flatMap((group) =>
  group.plans.map((plan) => ({
    product: group.heading.replace(" Care", ""),
    plan: plan.name,
    monthly: plan.monthly ?? null,
    annual: plan.annual ?? null
  }))
);

/* ---------- ENTERPRISE ---------- */

export const enterpriseRequirements = [
  "Dedicated support",
  "Custom SLA",
  "Multiple environments",
  "High availability",
  "Advanced security",
  "Dedicated infrastructure",
  "Large user base",
  "Multiple applications",
  "Enterprise integrations",
  "24×7 requirements"
];

/* ---------- ADDITIONAL SERVICES ---------- */

const add = pricingConfig.additionalServices;

export const additionalServices = [
  { name: "Additional Website Page", price: add.websitePage },
  { name: "Payment Gateway Integration", price: add.paymentGateway },
  { name: "WhatsApp Integration", price: add.whatsapp },
  { name: "SMS / OTP Integration", price: add.smsOtp },
  { name: "Google Maps / Location", price: add.maps },
  { name: "Advanced Reports", price: add.advancedReports },
  { name: "Additional User Role", price: add.additionalUserRole },
  { name: "Third-party API Integration", price: add.thirdPartyApi, plus: true },
  { name: "AI Feature", price: add.aiFeature, plus: true },
  { name: "Additional Mobile Application", price: add.additionalMobileApp, plus: true },
  { name: "Custom Dashboard", price: add.customDashboard, plus: true },
  { name: "Data Migration", price: add.dataMigration }
];

/* ---------- USAGE-BASED ---------- */

export const usageBasedServices = [
  {
    title: "Cloud Infrastructure",
    examples: ["Compute", "Database", "Storage", "CDN", "Bandwidth", "Backups"],
    note: "Billed according to actual usage."
  },
  {
    title: "Communication Services",
    examples: ["SMS", "OTP", "WhatsApp", "Email"],
    note: "Billed according to provider usage and applicable charges."
  },
  {
    title: "Third-Party Services",
    examples: ["Maps", "Payment gateways", "AI APIs", "External APIs"],
    note: "Provider charges are billed separately."
  }
];

/* ---------- ENGAGEMENT MODELS ---------- */

export const engagementModels = [
  {
    title: "Fixed Project",
    description: "For clearly defined requirements.",
    flow: ["Scope", "Proposal", "Development", "Testing", "Deployment"],
    model: "Fixed development fee.",
    bestFor: ["Websites", "Defined applications", "Clearly scoped software"]
  },
  {
    title: "Dedicated Development",
    description: "For businesses requiring continuous engineering.",
    flow: [],
    model: "Monthly / recurring engineering fee.",
    bestFor: [
      "Continuous feature development",
      "Product teams",
      "Long-term engineering requirements"
    ]
  },
  {
    title: "Product Development Partnership",
    description: "For customers building and evolving a product with ELVA.",
    flow: [],
    model: "Custom engagement.",
    includes: [
      "Product strategy",
      "Engineering",
      "Continuous development",
      "Integrations",
      "Managed operations"
    ],
    bestFor: []
  }
];

/* ---------- PAYMENT TERMS ---------- */

export const paymentTerms = [
  {
    range: "Projects Below ₹50,000",
    terms: ["50% advance", "50% before final deployment"]
  },
  {
    range: "Projects ₹50,000 – ₹2,00,000",
    terms: ["40% advance", "30% milestone", "30% before production deployment"]
  },
  {
    range: "Projects Above ₹2,00,000",
    terms: [
      "30% advance",
      "Remaining amount through milestone-based payments",
      "Final milestone must be completed before production deployment"
    ]
  }
];

/* ---------- ENQUIRY SOURCES ---------- */

/**
 * Maps the ?plan= slug used by pricing CTAs to a readable label, so an enquiry
 * arrives naming the exact plan and price the customer clicked. Unknown slugs
 * resolve to null, which keeps arbitrary URL text out of enquiry emails.
 */

function developmentLabel(plan) {
  const prefix = plan.pricePrefix ? `${plan.pricePrefix} ` : "";
  return `${plan.name} — ${prefix}${formatINR(plan.price)} ${plan.billingLabel}`;
}

function recurringLabel(group, plan) {
  const price = plan.monthly
    ? `${formatINR(plan.monthly)}/month or ${formatINR(plan.annual)}/year`
    : `${formatINR(plan.annual)}/year`;

  return `${group.heading} — ${plan.name} — ${price}`;
}

export const enquirySources = {
  ...Object.fromEntries(
    developmentPlans.map((plan) => [plan.id, developmentLabel(plan)])
  ),
  ...Object.fromEntries(
    careGroups.flatMap((group) =>
      group.plans.map((plan) => [plan.slug, recurringLabel(group, plan)])
    )
  ),
  "enterprise-support": "Enterprise & Custom Support — Custom Quote"
};

export function getEnquiryLabel(slug) {
  if (!slug) return null;
  return enquirySources[slug] ?? null;
}

/* ---------- FAQ ---------- */

export const pricingFaqs = [
  {
    q: "Is the development fee a one-time payment?",
    a: "Yes. The development fee covers the agreed scope of design, development, testing and initial deployment."
  },
  {
    q: "Do I have to pay a recurring fee?",
    a: "Recurring services depend on the engagement and whether ELVA is responsible for hosting, operating or maintaining the product."
  },
  {
    q: "Why are recurring plans different for websites, applications and platforms?",
    a: "Because their operational requirements are different. A website may primarily require hosting and basic maintenance, while an application or platform may require backend, database, APIs, monitoring and ongoing technical support."
  },
  {
    q: "Are cloud costs included?",
    a: "Cloud infrastructure and usage-based infrastructure costs may be billed separately depending on the project and actual consumption."
  },
  {
    q: "Are SMS and WhatsApp charges included?",
    a: "No. Provider usage charges are billed separately."
  },
  {
    q: "Can I add features later?",
    a: "Yes. New requirements can be scoped and quoted separately."
  },
  {
    q: "Can I change my recurring plan?",
    a: "Yes. The recurring plan can be changed if the operational requirements of the product change."
  },
  {
    q: "Can ELVA maintain software developed by another company?",
    a: "Yes, subject to a technical assessment of the existing system."
  },
  {
    q: "Can I cancel recurring services?",
    a: "Yes, subject to the cancellation terms defined in the applicable service agreement."
  },
  {
    q: "Is the pricing negotiable?",
    a: "The prices displayed on this page are ELVA's standard commercial pricing framework. Project pricing may be discussed based on scope, engagement duration, volume and commercial terms. Final pricing is confirmed in the project proposal/agreement."
  }
];
