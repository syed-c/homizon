import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-marina/marina-wharf'] || {
  title: 'Handyman Services in Marina Wharf, Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Marina Wharf, Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiMarinaMarinaWharfPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subArea="marina-wharf"
      subAreaName="Marina Wharf"
    />
  );
}