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
  { label: "Solutions", href: "/#solutions" },
  { label: "Results", href: "/#results" },
  { label: "Resources", href: "/#resources" },
  { label: "Bad Data Test", href: "/bad-data-test" },
  { label: "Book Call", href: "/book-call" }
] as const;

export const problemPoints = [
  {
    title: "You are funding channels that are not actually driving revenue",
    body:
      "Bad attribution makes weak channels look productive, so budget keeps flowing to spend that does not produce pipeline."
  },
  {
    title: "High-intent visitors never become pipeline because they remain anonymous",
    body:
      "The right buyers are already hitting your site. You just are not identifying enough of them to turn that demand into revenue."
  },
  {
    title: "Your attribution is wrong, so your decisions are wrong",
    body:
      "If the measurement layer is broken, every budget, targeting, and forecast decision built on top of it gets weaker."
  },
  {
    title: "You are optimizing based on incomplete or misleading data",
    body:
      "Growth teams move fast, but when CRM, analytics, and ad platform data do not line up, they optimize against the wrong signals."
  }
] as const;

export const steps = [
  {
    number: "01",
    title: "Diagnose with the Bad Data Test",
    body:
      "Identify where revenue is being lost across attribution, traffic identity, and revenue capture."
  },
  {
    number: "02",
    title: "Quantify recoverable revenue",
    body:
      "Show exactly how much pipeline and paid spend is recoverable before you increase budget."
  },
  {
    number: "03",
    title: "Implement the Data Growth Stack",
    body:
      "Fix attribution, targeting, and identity so the revenue you are already paying for stops leaking."
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
      "It is a short diagnostic that surfaces where bad attribution, anonymous traffic, and broken revenue data are hiding wasted spend and missed pipeline."
  },
  {
    question: "Who is this for?",
    answer:
      "It is built for B2B SaaS companies in the $5M-$100M ARR range that spend $50k-$500k per month on paid media and have an in-house growth team."
  },
  {
    question: "How much revenue can we recover?",
    answer:
      "That depends on how severe the Bad Data Tax is, but many qualified teams uncover meaningful recoverable pipeline, misattributed conversions, and wasted paid spend before they buy more traffic."
  },
  {
    question: "Why can’t I see this in my current dashboards?",
    answer:
      "Because most dashboards only report what is captured, not what is missing. If identity resolution, attribution, or conversion feedback is broken, your reporting can look acceptable while revenue still leaks underneath it."
  },
  {
    question: "What happens after the test?",
    answer:
      "Qualified teams get a clearer view of where revenue is being lost. From there, the next step is usually a Revenue Recovery Audit to quantify the opportunity in dollars."
  },
  {
    question: "What is a Revenue Recovery Audit?",
    answer:
      "It is a paid audit focused on measuring how much pipeline, spend efficiency, and targeting accuracy can be recovered by fixing bad data."
  },
  {
    question: "How long does implementation take?",
    answer:
      "That depends on the severity and spread of the data issues, but the goal is straightforward: fix the measurement and identity gaps fast enough to recover revenue before more budget gets wasted."
  }
] as const;

export const trustSignals = [
  "Takes 2 minutes",
  "Identifies hidden pipeline and wasted spend",
  "Built for B2B SaaS ($5M-$100M ARR)"
] as const;
