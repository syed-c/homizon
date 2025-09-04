import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jumeirah/jumeirah-2'] || {
  title: 'AC Repair & Maintenance in Jumeirah 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Jumeirah 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJumeirah2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-2"
      subareaName="Jumeirah 2"
    />
  );
}