import Image from "next/image";
import { altForSrc } from "@/lib/placeholders";

type PlaceholderMediaProps = {
  src: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  alt?: string;
};

export function PlaceholderMedia({
  src,
  className,
  sizes = "(max-width: 720px) 100vw, 50vw",
  preload = false,
  alt,
}: PlaceholderMediaProps) {
  return (
    <figure className={className ? `media-frame ${className}` : "media-frame"}>
      <Image
        src={src}
        alt={alt ?? altForSrc(src)}
        fill
        sizes={sizes}
        preload={preload}
      />
    </figure>
  );
}
