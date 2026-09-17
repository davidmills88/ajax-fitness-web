import Image from "next/image";
import { altForPlaceholder } from "@/lib/placeholders";

type PlaceholderMediaProps = {
  src: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  label?: boolean;
  alt?: string;
};

export function PlaceholderMedia({
  src,
  className,
  sizes = "(max-width: 720px) 100vw, 50vw",
  preload = false,
  label = false,
  alt,
}: PlaceholderMediaProps) {
  return (
    <figure className={className ? `media-frame ${className}` : "media-frame"}>
      <Image
        src={src}
        alt={alt ?? altForPlaceholder(src)}
        fill
        sizes={sizes}
        preload={preload}
      />
      {label ? <figcaption className="media-badge">Gym photo</figcaption> : null}
    </figure>
  );
}
