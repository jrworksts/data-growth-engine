export const siteConfig = {
  name: "Data Growth Engine",
  shortName: "DGE",
  url: "https://www.datagrowthengine.com",
  description:
    "Data Growth Engine helps B2B SaaS companies recover wasted ad spend and hidden pipeline by fixing bad data across acquisition, attribution, and revenue systems.",
  primaryCta: {
    label: "Take the Bad Data Test",
    href: "https://www.thebaddatatest.com/"
  },
  secondaryCta: {
    label: "Book an Intro Call",
    href: "https://api.leadconnectorhq.com/widget/bookings/intro-call-rev-recovery-audit"
  },
  email: "hello@datagrowthengine.com"
} as const;

export const navItems = [
  { label: "Problem", href: "/#problem" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Bad Data Test", href: "/bad-data-test" },
  { label: "Book a Call", href: "/book-call" },
  { label: "About", href: "/about" }
] as const;

export const problemPoints = [
  {
    title: "Bad attribution hides what is actually creating pipeline",
    body:
      "When source-of-truth systems disagree, revenue teams keep funding channels they cannot truly measure."
  },
  {
    title: "Anonymous traffic never turns into accountable demand",
    body:
      "High-intent visitors hit your site, disappear, and leave your growth team optimizing around incomplete buyer signals."
  },
  {
    title: "Paid spend leaks into the wrong audiences",
    body:
      "Weak identity resolution and poor conversion feedback force platforms to learn from noisy data instead of qualified revenue outcomes."
  },
  {
    title: "GTM decisions get made from partial data",
    body:
      "Forecasting, targeting, and channel planning all degrade when CRM, analytics, and ad systems are out of sync."
  }
] as const;

export const steps = [
  {
    number: "01",
    title: "Diagnose with the Bad Data Test",
    body:
      "Pressure-test attribution, traffic identity, measurement coverage, and revenue signal quality in a fast executive diagnostic."
  },
  {
    number: "02",
    title: "Quantify recoverable revenue",
    body:
      "The Revenue Recovery Audit sizes the Bad Data Tax in pipeline, spend efficiency, and lost decision quality."
  },
  {
    number: "03",
    title: "Implement the Data Growth Stack",
    body:
      "DGE fixes the underlying data architecture so your growth team can target, measure, and scale from cleaner revenue signals."
  }
] as const;

export const outcomes = [
  "Recover lost pipeline visibility",
  "Improve paid spend efficiency",
  "Turn anonymous traffic into contacts",
  "Fix targeting and measurement blind spots",
  "Make growth decisions from cleaner revenue data"
] as const;

export const qualification = {
  for: [
    "B2B SaaS companies",
    "$5M-$100M ARR",
    "$50k-$500k per month in paid media",
    "An in-house growth or demand gen team"
  ],
  notFor: [
    "Ecommerce brands",
    "Local businesses",
    "Agencies or consultants buying on behalf of clients",
    "Early-stage teams without meaningful paid spend"
  ]
} as const;

export const faqs = [
  {
    question: "What is the Bad Data Test?",
    answer:
      "It is a diagnostic designed to uncover where bad attribution, weak identity resolution, and incomplete revenue data are suppressing paid performance and pipeline visibility."
  },
  {
    question: "Who is this for?",
    answer:
      "The offer is built for B2B SaaS companies with real paid media budgets, an internal growth team, and a need for cleaner revenue signals."
  },
  {
    question: "What happens after the test?",
    answer:
      "Qualified teams get a clearer view of likely measurement gaps and can move into a Revenue Recovery Audit to quantify the opportunity."
  },
  {
    question: "What is a Revenue Recovery Audit?",
    answer:
      "It is a paid engagement focused on sizing how much pipeline visibility, ad efficiency, and targeting accuracy can be recovered by fixing bad data."
  },
  {
    question: "Do you work with non-SaaS companies?",
    answer:
      "No. DGE is positioned specifically for B2B SaaS companies with complex acquisition, attribution, and CRM data flows."
  },
  {
    question: "What kinds of data problems do you fix?",
    answer:
      "Common issues include broken attribution, weak lead-source hygiene, missing conversion feedback, poor identity coverage, anonymous traffic loss, and disconnected CRM-to-ad platform signals."
  }
] as const;

export const trustSignals = [
  "Built for revenue-focused growth teams",
  "Focused on revenue recovery, not vanity metrics",
  "Case studies coming soon"
] as const;
