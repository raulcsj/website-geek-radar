import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `联系我们 | ${SITE_TITLE}`,
  description: `联系 ${SITE_TITLE}：邮箱或反馈渠道。`,
};

export default function ContactPage() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">← 返回首页</Link>
      <div className="mt-4 mb-8 pb-5 border-b border-line">
        <p className="kicker">联系我们</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">联系我们</h1>
      </div>
      <div className="prose max-w-none">
        <p>欢迎通过以下方式联系 {SITE_TITLE}：</p>
        <h2>邮件</h2>
        <p>内容反馈、商务合作与转载授权：<a href="mailto:hello@geek-radar.example">hello@geek-radar.example</a></p>
        <p>我们通常会在 2 个工作日内回复。请在邮件中简要说明来意，并附上您的联系方式。</p>
        <h2>反馈与勘误</h2>
        <p>文章中的参数或结论如有疏漏，欢迎在对应文章下留言指出，我们会尽快核对并修正。</p>
      </div>
    </article>
  );
}
