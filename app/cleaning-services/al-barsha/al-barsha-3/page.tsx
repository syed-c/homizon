import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-barsha/al-barsha-3'] || {
  title: 'Cleaning Services in Al Barsha 3 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Barsha 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBarsha3Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-3"
      subareaName="Al Barsha 3"
    />
  );
}