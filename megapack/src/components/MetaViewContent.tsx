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
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: contentName,
        content_type: contentType,
        content_ids: contentId ? [contentId] : undefined,
        value: value,
        currency: currency,
      });
    }
  }, [contentName, contentType, contentId, value, currency]);

  return null;
}
