import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-satwa/al-satwa-residential'] || {
  title: 'Bathroom Deep Cleaning in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}