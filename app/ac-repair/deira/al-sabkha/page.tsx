import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/deira/al-sabkha'] || {
  title: 'AC Repair & Maintenance in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}