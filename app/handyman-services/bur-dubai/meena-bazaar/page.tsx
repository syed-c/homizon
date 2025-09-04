import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/bur-dubai/meena-bazaar'] || {
  title: 'Handyman Services in Meena Bazaar, Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Meena Bazaar, Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBurDubaiMeenaBazaarPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="bur-dubai"
      areaName="Bur Dubai"
      subArea="meena-bazaar"
      subAreaName="Meena Bazaar"
    />
  );
}