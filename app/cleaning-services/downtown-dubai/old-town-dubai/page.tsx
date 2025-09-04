import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/downtown-dubai/old-town-dubai'] || {
  title: 'Cleaning Services in Old Town Dubai - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Old Town Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesOldTownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="old-town-dubai"
      subareaName="Old Town Dubai"
    />
  );
}