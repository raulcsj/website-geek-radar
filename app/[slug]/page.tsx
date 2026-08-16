import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/posts";
import ArticleImage from "@/components/ArticleImage";
import { SITE_TITLE, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const LOCALE: string = "zh";
const IS_ZH = LOCALE === "zh";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      publishedTime: meta.date,
      images: meta.cover ? [{ url: meta.cover }] : undefined,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const base = SITE_URL.replace(/\/+$/, "");
  const readingMinutes = Math.max(1, Math.round(content.length / 500));
  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === slug);
  const newer = index > 0 ? all[index - 1] : null;
  const older = index >= 0 && index < all.length - 1 ? all[index + 1] : null;
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    url: `${base}/${slug}`,
    image: meta.cover ? `${base}${meta.cover}` : undefined,
    author: { "@type": "Person", name: SITE_TITLE },
    publisher: { "@type": "Organization", name: SITE_TITLE },
  };
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-accent">
        ← {IS_ZH ? "返回首页" : "Back to home"}
      </Link>

      {/* 封面大图 hero：标题与元信息压在图上 */}
      <div className="relative overflow-hidden rounded-card aspect-[16/9] sm:aspect-[21/9] bg-surface-alt shadow-card mt-4">
        {meta.cover && (
          <Image
            src={meta.cover}
            alt={meta.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          {meta.tags?.length ? (
            <div className="flex flex-wrap gap-2 text-xs">
              {meta.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-2.5 py-0.5 font-medium text-white backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <h1 className="mt-3 font-display text-3xl sm:text-5xl font-bold leading-tight text-white max-w-3xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-sm text-white/80">
            <time dateTime={meta.date}>{meta.date}</time>
            <span className="mx-2" aria-hidden>·</span>
            {IS_ZH ? `约 ${readingMinutes} 分钟阅读` : `${readingMinutes} min read`}
          </p>
        </div>
      </div>

      {/* 正文 */}
      <div className="prose max-w-none mt-8 sm:mt-12">
        <MDXRemote source={content} components={{ ArticleImage }} />
      </div>

      {/* 上一篇 / 下一篇 */}
      {(newer || older) && (
        <nav className="mt-12 grid gap-4 sm:grid-cols-2" aria-label={IS_ZH ? "文章导航" : "Post navigation"}>
          {older ? (
            <Link
              href={`/${older.slug}`}
              className="group rounded-card bg-surface p-5 shadow-card ring-1 ring-line transition-shadow hover:shadow-card-hover"
            >
              <span className="text-xs text-muted">{IS_ZH ? "← 更早一篇" : "← Older"}</span>
              <span className="mt-1.5 block font-display font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              href={`/${newer.slug}`}
              className="group rounded-card bg-surface p-5 text-right shadow-card ring-1 ring-line transition-shadow hover:shadow-card-hover"
            >
              <span className="text-xs text-muted">{IS_ZH ? "更新一篇 →" : "Newer →"}</span>
              <span className="mt-1.5 block font-display font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                {newer.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
    </article>
  );
}
