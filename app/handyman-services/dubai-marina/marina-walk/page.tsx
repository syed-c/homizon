import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-marina/marina-walk'] || {
  title: 'Handyman Services in Marina Walk, Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Marina Walk, Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiMarinaMarinaWalkPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subArea="marina-walk"
      subAreaName="Marina Walk"
    />
  );
}