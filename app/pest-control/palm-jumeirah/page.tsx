import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/palm-jumeirah'] || {
  title: 'Pest Control in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional pest control services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}