import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-mizhar'] || {
  title: 'Bathroom Deep Cleaning in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}