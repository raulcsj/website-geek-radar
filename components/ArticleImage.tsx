import Image from "next/image";

export type ArticleImageVariant = "full" | "left" | "right" | "wide";
export type ArticleImageAspect = "3/2" | "4/3" | "1/1" | "16/9";

// full：常规全宽；wide：大场景出血（md 起略微加宽）；left/right：细节图浮动在正文旁
const VARIANT_CLASSES: Record<ArticleImageVariant, string> = {
  full: "my-6",
  wide: "my-8 md:-mx-8 lg:-mx-14",
  left: "my-6 md:my-4 md:mr-8 md:float-left md:w-[46%]",
  right: "my-6 md:my-4 md:ml-8 md:float-right md:w-[46%]",
};

const ASPECT_CLASSES: Record<ArticleImageAspect, string> = {
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

export default function ArticleImage({
  src,
  alt,
  caption,
  variant = "full",
  aspect = "3/2",
}: {
  src: string;
  alt: string;
  caption?: string;
  variant?: ArticleImageVariant;
  aspect?: ArticleImageAspect;
}) {
  const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.full;
  const aspectClass = ASPECT_CLASSES[aspect] ?? ASPECT_CLASSES["3/2"];
  return (
    <figure className={`not-prose ${variantClass}`}>
      <div className={`relative w-full ${aspectClass} overflow-hidden rounded-lg bg-canvas shadow-sm`}>
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted text-center">{caption}</figcaption>}
    </figure>
  );
}
