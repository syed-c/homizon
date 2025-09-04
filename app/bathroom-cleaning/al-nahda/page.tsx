import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-nahda'] || {
  title: 'Bathroom Deep Cleaning in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}