import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/nad-al-sheba'] || {
  title: 'Pest Control in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional pest control services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}