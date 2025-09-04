import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-barsha/al-barsha-3'] || {
  title: 'Bathroom Deep Cleaning in Al Barsha 3 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Barsha 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlBarsha3Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-3"
      subareaName="Al Barsha 3"
    />
  );
}