import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/silicon-oasis/silicon-heights'] || {
  title: 'AC Repair & Maintenance in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}