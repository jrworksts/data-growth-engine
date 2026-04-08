import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Data Growth Engine."
};

const sections = [
  {
    title: "Information we collect",
    body:
      "Data Growth Engine may collect information you submit through forms, including your name, business email, company, and details about your revenue operations or paid media environment."
  },
  {
    title: "How we use information",
    body:
      "We use submitted information to respond to inquiries, qualify fit, schedule conversations, and improve the relevance of our services and site experience."
  },
  {
    title: "Third-party services",
    body:
      "This site links to and may embed third-party tools for diagnostics and booking. Those tools may collect information according to their own terms and privacy policies."
  },
  {
    title: "Your choices",
    body:
      "You can contact Data Growth Engine to request updates or deletion of information you have submitted through the site."
  }
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal>
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
        <p className="mt-5 text-base leading-7 text-white/72">This policy explains how Data Growth Engine handles information submitted through this website.</p>
      </Reveal>
      <div className="mt-12 space-y-8">
        {sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 0.05}>
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="font-display text-2xl font-bold text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-white/72">{section.body}</p>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
