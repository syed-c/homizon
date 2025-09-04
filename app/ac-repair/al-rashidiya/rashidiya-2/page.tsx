import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-rashidiya/rashidiya-2'] || {
  title: 'AC Repair & Maintenance in Rashidiya 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Rashidiya 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceRashidiya2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-2"
      subareaName="Rashidiya 2"
    />
  );
}