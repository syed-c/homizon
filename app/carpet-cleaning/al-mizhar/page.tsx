import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-mizhar'] || {
  title: 'Carpet Cleaning in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}