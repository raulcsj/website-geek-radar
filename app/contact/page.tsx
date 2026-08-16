import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${SITE_TITLE}`,
  description: `Contact ${SITE_TITLE}: email and feedback channels.`,
};

export default function ContactPage() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">← Back to home</Link>
      <div className="mt-4 mb-8 pb-5 border-b border-line">
        <p className="kicker">Contact</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">Contact Us</h1>
      </div>
      <div className="prose max-w-none">
        <p>You can reach {SITE_TITLE} through the following channels:</p>
        <h2>Email</h2>
        <p>Feedback, business inquiries, and republishing requests: <a href="mailto:hello@geek-radar.example">hello@geek-radar.example</a></p>
        <p>We usually reply within two business days. Please briefly describe your request and include a way to reach you.</p>
        <h2>Corrections</h2>
        <p>If you spot an error in a spec or conclusion, let us know — we verify and fix articles as quickly as possible.</p>
      </div>
    </article>
  );
}
