"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if current path is an admin route
  const isAdminRoute = pathname?.startsWith('/admin');
  
  if (isAdminRoute) {
    // Admin routes don't get header/footer
    return <>{children}</>;
  }
  
  // Regular routes get header/footer
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}