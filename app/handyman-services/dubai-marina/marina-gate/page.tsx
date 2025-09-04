import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-marina/marina-gate'] || {
  title: 'Handyman Services in Marina Gate, Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Marina Gate, Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiMarinaMarinaGatePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subArea="marina-gate"
      subAreaName="Marina Gate"
    />
  );
}