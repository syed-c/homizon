import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-production-city'] || {
  title: 'AC Servicing in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiProductionCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-production-city"
      areaName="Dubai Production City"
    />
  );
}