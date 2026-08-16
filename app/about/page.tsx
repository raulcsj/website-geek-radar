import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESC } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${SITE_TITLE}`,
  description: `What ${SITE_TITLE} covers: ${SITE_DESC}`,
};

export default function AboutPage() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">← Back to home</Link>
      <div className="mt-4 mb-8 pb-5 border-b border-line">
        <p className="kicker">About</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">About Geek Radar</h1>
      </div>
      <div className="prose max-w-none">
        <p>{SITE_TITLE} is a tech information site focused on smartphones, PC hardware, and smart devices. We translate specs into real-world experience.</p>
        <p>Every article here answers three questions: what a spec actually means, how real-world results differ from the numbers on the box, and whether the upgrade is worth your money.</p>
        <h2>What we cover</h2>
        <ul>
          <li>Phones & mobile ecosystem: fast charging, cameras, chipsets, and software experience</li>
          <li>PC & DIY hardware: build checklists, spec deep-dives, and common pitfalls</li>
          <li>Smart devices: earbuds, wearables, and smart home gear</li>
        </ul>
        <h2>Update cadence</h2>
        <p>We publish weekly, following product launches and long-term testing. All articles are original, and specifications are noted with sources and test conditions wherever possible.</p>
        <h2>Contact</h2>
        <p>For business inquiries or republishing requests, use the <a href="/contact">contact page</a>.</p>
      </div>
    </article>
  );
}
