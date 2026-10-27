"use client";

import { useEffect } from "react";

interface MetaViewContentProps {
  contentName: string;
  contentType?: string;
  contentId?: string;
  value: number;
  currency?: string;
}

export function MetaViewContent({
  contentName,
  contentType = "product",
  contentId,
  value,
  currency = "USD",
}: MetaViewContentProps) {
  useEffect(() => {
    const dispatchViewContent = () => {
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "ViewContent", {
          content_name: contentName,
          content_type: contentType,
          content_ids: contentId ? [contentId] : undefined,
          value: value,
          currency: currency,
        });
        return true;
      }
      return false;
    };

    if (!dispatchViewContent()) {
      const interval = setInterval(() => {
        if (dispatchViewContent()) {
          clearInterval(interval);
        }
      }, 250);
      const timer = setTimeout(() => clearInterval(interval), 3000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [contentName, contentType, contentId, value, currency]);

  return null;
}
