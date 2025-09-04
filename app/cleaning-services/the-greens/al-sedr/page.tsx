import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-greens/al-sedr'] || {
  title: 'Cleaning Services in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}