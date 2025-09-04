import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/palm-jumeirah/atlantis-area'] || {
  title: 'AC Repair & Maintenance in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}