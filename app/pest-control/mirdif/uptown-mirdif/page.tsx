import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/mirdif/uptown-mirdif'] || {
  title: 'Pest Control in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional pest control services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}