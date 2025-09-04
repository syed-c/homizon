import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/mirdif/uptown-mirdif'] || {
  title: 'Bathroom Plumbing in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}