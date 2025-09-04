import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barsha/al-barsha-3'] || {
  title: 'Carpet Cleaning in Al Barsha 3 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barsha 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarsha3Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-3"
      subareaName="Al Barsha 3"
    />
  );
}