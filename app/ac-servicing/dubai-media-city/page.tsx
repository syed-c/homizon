import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-media-city'] || {
  title: 'AC Servicing in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}