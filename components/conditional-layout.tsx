"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isAdminRoute = pathname?.startsWith('/admin');
  
  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
        <main>{children}</main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}