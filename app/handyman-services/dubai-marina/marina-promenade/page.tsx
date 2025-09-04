import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-marina/marina-promenade'] || {
  title: 'Handyman Services in Marina Promenade, Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Marina Promenade, Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiMarinaMarinaPromenadePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subArea="marina-promenade"
      subAreaName="Marina Promenade"
    />
  );
}