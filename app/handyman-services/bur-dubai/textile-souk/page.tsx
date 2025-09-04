import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/bur-dubai/textile-souk'] || {
  title: 'Handyman Services in Textile Souk, Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Textile Souk, Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBurDubaiTextileSoukPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="bur-dubai"
      areaName="Bur Dubai"
      subArea="textile-souk"
      subAreaName="Textile Souk"
    />
  );
}