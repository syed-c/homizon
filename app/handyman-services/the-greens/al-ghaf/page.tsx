import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-greens/al-ghaf'] || {
  title: 'Handyman Services in Al Ghaf, The Greens - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Ghaf, The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheGreensAlGhafPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-greens"
      areaName="The Greens"
      subArea="al-ghaf"
      subAreaName="Al Ghaf"
    />
  );
}