import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-barsha/al-barsha-south'] || {
  title: 'Cleaning Services in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}