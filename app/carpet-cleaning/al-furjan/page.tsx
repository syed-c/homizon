import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-furjan'] || {
  title: 'Carpet Cleaning in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}