import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-internet-city'] || {
  title: 'AC Servicing in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}