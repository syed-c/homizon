import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-mamzar'] || {
  title: 'Carpet Cleaning in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}