import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/town-square'] || {
  title: 'Pest Control in Town Square - Professional Services | HOMIZON',
  description: 'Professional pest control services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="town-square"
      areaName="Town Square"
    />
  );
}