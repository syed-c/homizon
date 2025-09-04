import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jumeirah/al-manara'] || {
  title: 'AC Repair & Maintenance in Al Manara - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}