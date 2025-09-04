import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-qusais'] || {
  title: 'Bathroom Deep Cleaning in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}