import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-twar'] || {
  title: 'Bathroom Deep Cleaning in Al Twar - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}