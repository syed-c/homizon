import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-satwa'] || {
  title: 'Bathroom Deep Cleaning in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlSatwaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-satwa"
      areaName="Al Satwa"
    />
  );
}