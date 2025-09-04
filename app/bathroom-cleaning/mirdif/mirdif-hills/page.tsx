import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/mirdif/mirdif-hills'] || {
  title: 'Bathroom Deep Cleaning in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}