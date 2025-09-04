import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-satwa/al-satwa-residential'] || {
  title: 'AC Repair & Maintenance in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}