import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/mirdif/mirdif-hills'] || {
  title: 'AC Servicing in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}