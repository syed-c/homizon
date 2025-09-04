import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jumeirah/al-wasl'] || {
  title: 'AC Repair & Maintenance in Al Wasl - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Wasl. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlWaslPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-wasl"
      subareaName="Al Wasl"
    />
  );
}