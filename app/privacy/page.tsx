import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_TITLE}`,
  description: `${SITE_TITLE} privacy policy: data collection, cookies, and third-party advertising.`,
};

export default function PrivacyPage() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">← Back to home</Link>
      <div className="mt-4 mb-8 pb-5 border-b border-line">
        <p className="kicker">Privacy</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">Privacy Policy</h1>
      </div>
      <div className="prose max-w-none">
        <p>Effective date: 2026-08-01</p>
        <h2>Information we collect</h2>
        <p>This site is a static blog and does not collect registration data. Servers and third-party services may log access information (IP address, browser, pages visited) for security and analytics.</p>
        <h2>Cookies and third-party advertising</h2>
        <p>This site may display Google AdSense ads. As a third-party vendor, Google may use cookies or web beacons to record your visits to this and other sites and serve personalized ads. You can opt out of personalized advertising at <a href="https://adssettings.google.com">Google Ads Settings</a> or <a href="https://www.aboutads.info">AboutAds</a>.</p>
        <h2>Your choices</h2>
        <p>You can manage or delete cookies through your browser settings; disabling cookies does not affect core reading functionality.</p>
        <h2>Contact</h2>
        <p>For privacy questions, email <a href="mailto:hello@geek-radar.example">hello@geek-radar.example</a>. This site lives at <a href={SITE_URL}>{SITE_URL}</a>.</p>
      </div>
    </article>
  );
}
