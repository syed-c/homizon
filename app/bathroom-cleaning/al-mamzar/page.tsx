import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-mamzar'] || {
  title: 'Bathroom Deep Cleaning in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}