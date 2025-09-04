import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-sufouh'] || {
  title: 'Bathroom Deep Cleaning in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}