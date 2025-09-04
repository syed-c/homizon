import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-barsha/al-barsha-1'] || {
  title: 'Cleaning Services in Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBarsha1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-1"
      subareaName="Al Barsha 1"
    />
  );
}