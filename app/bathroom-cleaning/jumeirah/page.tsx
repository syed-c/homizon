import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jumeirah'] || {
  title: 'Bathroom Deep Cleaning in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}