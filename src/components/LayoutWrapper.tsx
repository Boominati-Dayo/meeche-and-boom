"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
}