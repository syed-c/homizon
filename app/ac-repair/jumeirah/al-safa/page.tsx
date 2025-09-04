import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jumeirah/al-safa'] || {
  title: 'AC Repair & Maintenance in Al Safa - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Safa. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlSafaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-safa"
      subareaName="Al Safa"
    />
  );
}