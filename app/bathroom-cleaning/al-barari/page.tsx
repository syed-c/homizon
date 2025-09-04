import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-barari'] || {
  title: 'Bathroom Deep Cleaning in Al Barari - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}