import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-greens/al-nakheel'] || {
  title: 'Handyman Services in Al Nakheel, The Greens - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Nakheel, The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheGreensAlNakheelPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-greens"
      areaName="The Greens"
      subArea="al-nakheel"
      subAreaName="Al Nakheel"
    />
  );
}