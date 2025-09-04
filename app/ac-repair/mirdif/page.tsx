import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/mirdif'] || {
  title: 'AC Repair & Maintenance in Mirdif - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="mirdif"
      areaName="Mirdif"
    />
  );
}