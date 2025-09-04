import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-furjan'] || {
  title: 'Bathroom Deep Cleaning in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}