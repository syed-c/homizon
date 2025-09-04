import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barsha/al-barsha-2'] || {
  title: 'Carpet Cleaning in Al Barsha 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barsha 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarsha2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-2"
      subareaName="Al Barsha 2"
    />
  );
}