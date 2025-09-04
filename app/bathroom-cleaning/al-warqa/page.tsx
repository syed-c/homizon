import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-warqa'] || {
  title: 'Bathroom Deep Cleaning in Al Warqa - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlWarqaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-warqa"
      areaName="Al Warqa"
    />
  );
}