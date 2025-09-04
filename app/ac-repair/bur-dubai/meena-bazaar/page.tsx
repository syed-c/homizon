import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/bur-dubai/meena-bazaar'] || {
  title: 'AC Repair & Maintenance in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}