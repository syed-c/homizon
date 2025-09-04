import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/mirdif/uptown-mirdif'] || {
  title: 'AC Servicing in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}