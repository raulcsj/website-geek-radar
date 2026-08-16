import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `隐私政策 | ${SITE_TITLE}`,
  description: `${SITE_TITLE} 的隐私政策：信息收集、Cookie 与第三方广告说明。`,
};

export default function PrivacyPage() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">← 返回首页</Link>
      <div className="mt-4 mb-8 pb-5 border-b border-line">
        <p className="kicker">隐私政策</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">隐私政策</h1>
      </div>
      <div className="prose max-w-none">
        <p>生效日期：2026-08-01</p>
        <h2>我们收集的信息</h2>
        <p>本站为静态博客，不收集用户注册信息。服务器与第三方服务可能记录访问日志（IP、浏览器、访问页面等），用于安全与统计。</p>
        <h2>Cookie 与第三方广告</h2>
        <p>本站可能展示 Google AdSense 广告。Google 作为第三方广告商，可能使用 Cookie 或网络信标记录您在本站及其他网站的访问，以展示个性化广告。您可以在 <a href="https://adssettings.google.com">Google 广告设置</a> 或 <a href="https://www.aboutads.info">AboutAds</a> 选择退出个性化广告。</p>
        <h2>您的选择</h2>
        <p>您可以通过浏览器设置管理或删除 Cookie；停用 Cookie 不影响本站核心内容阅读。</p>
        <h2>联系方式</h2>
        <p>如有隐私相关问题，请发送邮件至 <a href="mailto:hello@geek-radar.example">hello@geek-radar.example</a>。本站地址：<a href={SITE_URL}>{SITE_URL}</a></p>
      </div>
    </article>
  );
}
