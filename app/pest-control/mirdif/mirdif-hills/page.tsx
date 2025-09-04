import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/mirdif/mirdif-hills'] || {
  title: 'Pest Control in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional pest control services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}