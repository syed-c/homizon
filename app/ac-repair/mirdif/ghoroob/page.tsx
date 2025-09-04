import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/mirdif/ghoroob'] || {
  title: 'AC Repair & Maintenance in Ghoroob - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Ghoroob. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGhoroobPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="mirdif"
      areaName="Mirdif"
      subarea="ghoroob"
      subareaName="Ghoroob"
    />
  );
}