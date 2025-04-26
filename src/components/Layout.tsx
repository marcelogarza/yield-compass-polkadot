
import React, { ReactNode } from "react";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-6">{children}</main>
      <footer className="py-4 px-6 text-center text-sm text-gray-500">
        Polkadot Yield Compass © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
