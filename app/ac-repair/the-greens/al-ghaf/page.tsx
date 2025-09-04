import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-greens/al-ghaf'] || {
  title: 'AC Repair & Maintenance in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}