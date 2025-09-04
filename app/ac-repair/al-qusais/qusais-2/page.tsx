import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-qusais/qusais-2'] || {
  title: 'AC Repair & Maintenance in Qusais 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Qusais 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceQusais2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-2"
      subareaName="Qusais 2"
    />
  );
}