import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/nad-al-sheba'] || {
  title: 'Bathroom Deep Cleaning in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}