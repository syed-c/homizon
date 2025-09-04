import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/emaar-beachfront'] || {
  title: 'Handyman Services in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
      
      
    />
  );
}