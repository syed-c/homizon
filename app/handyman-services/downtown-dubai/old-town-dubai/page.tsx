import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/downtown-dubai/old-town-dubai'] || {
  title: 'Handyman Services in Old Town Dubai, Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Old Town Dubai, Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDowntownDubaiOldTownDubaiPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subArea="old-town-dubai"
      subAreaName="Old Town Dubai"
    />
  );
}