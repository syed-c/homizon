import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/palm-jumeirah'] || {
  title: 'Bathroom Deep Cleaning in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}