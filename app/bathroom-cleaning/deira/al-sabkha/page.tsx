import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/deira/al-sabkha'] || {
  title: 'Bathroom Deep Cleaning in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}