import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jumeirah'] || {
  title: 'Pest Control in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional pest control services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}