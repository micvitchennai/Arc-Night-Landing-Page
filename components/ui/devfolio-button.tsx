"use client";

import { useEffect } from "react";

interface DevfolioButtonProps {
  slug?: string;
  theme?: "light" | "dark" | "dark-inverted";
}

export function DevfolioButton({
  slug = "microcraft-arcnight",
  theme = "dark",
}: DevfolioButtonProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="apply-button mx-auto"
      data-hackathon-slug={slug}
      data-button-theme={theme}
      style={{ height: "44px", width: "312px" }}
    />
  );
}
