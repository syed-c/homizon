import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/bur-dubai/al-fahidi'] || {
  title: 'Cleaning Services in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}