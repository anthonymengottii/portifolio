"use client";

import { Media } from "@once-ui-system/core";
import type { MediaProps } from "@once-ui-system/core";

interface BlogImageProps extends Omit<MediaProps, "src"> {
  src: string;
  alt: string;
}

export function BlogImage({ src, alt, aspectRatio = "16/9", ...props }: BlogImageProps) {
  // Se a URL for da API OG (com query string), usa tag img normal
  // porque o Next.js Image não suporta query strings em URLs locais
  if (src.startsWith("/api/og/generate")) {
    const aspectRatioValue = aspectRatio.toString().replace(" ", "");
    const [width, height] = aspectRatioValue.split("/").map(Number);
    const paddingBottom = `${(height / width) * 100}%`;

    // Determinar maxWidth baseado no tamanho especificado em sizes
    let maxWidth = "100%";
    if (props.sizes) {
      const sizesMatch = props.sizes.match(/(\d+)px/);
      if (sizesMatch) {
        maxWidth = `${Math.min(Number.parseInt(sizesMatch[1], 10), 640)}px`;
      }
    }

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth,
          margin: "0 auto",
          paddingBottom,
          borderRadius: "var(--radius-l, 12px)",
          overflow: "hidden",
          border: "1px solid var(--color-neutral-alpha-weak, rgba(255, 255, 255, 0.1))",
          ...(props.marginTop && { marginTop: typeof props.marginTop === "string" ? `var(--spacing-${props.marginTop})` : `${props.marginTop}px` }),
          ...(props.marginBottom && { marginBottom: typeof props.marginBottom === "string" ? `var(--spacing-${props.marginBottom})` : `${props.marginBottom}px` }),
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  // Para outras imagens, usa o componente Media otimizado
  return <Media src={src} alt={alt} aspectRatio={aspectRatio} {...props} />;
}
