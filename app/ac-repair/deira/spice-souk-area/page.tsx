import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/deira/spice-souk-area'] || {
  title: 'AC Repair & Maintenance in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}