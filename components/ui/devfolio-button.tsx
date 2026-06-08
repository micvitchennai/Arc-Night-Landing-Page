"use client";

import { useEffect } from "react";

interface DevfolioButtonProps {
  slug?: string;
  theme?: "light" | "dark" | "dark-inverted";
}

interface CustomWindow extends Window {
  devfolio?: {
    Init: () => void;
  };
}

export function DevfolioButton({
  slug = "microcraft-arcnight",
  theme = "dark",
}: DevfolioButtonProps) {
  useEffect(() => {
    const customWindow = window as unknown as CustomWindow;
    if (customWindow.devfolio) {
      customWindow.devfolio.Init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (customWindow.devfolio) {
        customWindow.devfolio.Init();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [slug, theme]);

  return (
    <div
      key={`${slug}-${theme}`} 
      className="apply-button mx-auto"
      data-hackathon-slug={slug}
      data-button-theme={theme}
      style={{ height: "44px", width: "312px" }}
    />
  );
}