import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/mirdif/mirdif-hills'] || {
  title: 'Cleaning Services in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}