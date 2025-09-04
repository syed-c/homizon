import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-nahda/nahda-1'] || {
  title: 'Cleaning Services in Nahda 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Nahda 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesNahda1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-1"
      subareaName="Nahda 1"
    />
  );
}