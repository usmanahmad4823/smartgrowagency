"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    Tawk_API?: { maximize: () => void };
    Tawk_LoadStart?: Date;
  }
}

export function LiveChatLoader() {
  useEffect(() => {
    const propertyId = siteConfig.tawkPropertyId;
    const widgetId = siteConfig.tawkWidgetId;
    if (!propertyId || !widgetId) return;

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0?.parentNode?.insertBefore(s1, s0);
  }, []);

  return null;
}
