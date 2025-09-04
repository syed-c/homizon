import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-festival-city'] || {
  title: 'AC Servicing in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}