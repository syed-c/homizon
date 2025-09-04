import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/silicon-oasis/silicon-avenue'] || {
  title: 'Handyman Services in Silicon Avenue, Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Silicon Avenue, Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesSiliconOasisSiliconAvenuePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subArea="silicon-avenue"
      subAreaName="Silicon Avenue"
    />
  );
}