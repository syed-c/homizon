import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/mirdif/uptown-mirdif'] || {
  title: 'AC Repair & Maintenance in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}