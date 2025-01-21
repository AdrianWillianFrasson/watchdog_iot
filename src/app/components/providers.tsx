"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider className="flex flex-col h-full w-full">{children}</NextUIProvider>;
}
