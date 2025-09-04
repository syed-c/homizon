import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/international-city'] || {
  title: 'AC Servicing in International City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="international-city"
      areaName="International City"
    />
  );
}