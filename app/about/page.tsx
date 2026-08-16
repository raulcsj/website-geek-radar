import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESC } from "@/lib/site";

export const metadata: Metadata = {
  title: `关于本站 | ${SITE_TITLE}`,
  description: `了解 ${SITE_TITLE}：${SITE_DESC}`,
};

export default function AboutPage() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">← 返回首页</Link>
      <div className="mt-4 mb-8 pb-5 border-b border-line">
        <p className="kicker">关于本站</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">关于本站</h1>
      </div>
      <div className="prose max-w-none">
        <p>{SITE_TITLE} 是一个专注科技产品的信息站，聚焦智能手机、PC 硬件与智能穿戴的参数解读、真实体验和选购建议。</p>
        <p>我们相信，买数码产品最怕的不是预算不够，而是被营销词和参数表带偏。因此本站的内容围绕三个问题展开：这个参数意味着什么、真实体验和标称值差多少、这笔钱花得值不值。</p>
        <h2>内容方向</h2>
        <ul>
          <li>手机与移动生态：快充、影像、芯片与系统体验</li>
          <li>PC 与 DIY 硬件：装机搭配、规格解读与避坑清单</li>
          <li>智能硬件：耳机、手表、智能家居的实际体验</li>
        </ul>
        <h2>更新频率</h2>
        <p>本站保持每周更新的节奏，围绕新品发布与长期实测持续补充内容。所有文章均为原创，参数部分会尽量注明来源与测量条件，方便你交叉验证。</p>
        <h2>联系与转载</h2>
        <p>商务合作或转载授权请通过 <a href="/contact">联系页面</a> 与我们沟通。</p>
      </div>
    </article>
  );
}
