"use client";

import { useEffect, useId, useState } from "react";

function getIsDark() {
  if (typeof document === "undefined") return true;
  return document.documentElement.getAttribute("data-theme") !== "light";
}

export function Mermaid({ chart }: { chart: string }) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");
  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(getIsDark()));
    observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "default",
        securityLevel: "strict",
        fontFamily: "inherit",
      });
      try {
        const { svg } = await mermaid.render(`mermaid-${rawId}`, chart);
        if (!cancelled) setSvg(svg);
      } catch (error) {
        console.error("Failed to render Mermaid diagram:", error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, isDark, rawId]);

  return (
    <div
      style={{
        margin: "2rem 0",
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
      }}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: SVG is generated client-side by mermaid from our own MDX content
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
