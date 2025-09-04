import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/international-city'] || {
  title: 'Pest Control in International City - Professional Services | HOMIZON',
  description: 'Professional pest control services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="international-city"
      areaName="International City"
    />
  );
}