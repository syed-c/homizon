import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-garhoud'] || {
  title: 'Bathroom Deep Cleaning in Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlGarhoudPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-garhoud"
      areaName="Al Garhoud"
    />
  );
}