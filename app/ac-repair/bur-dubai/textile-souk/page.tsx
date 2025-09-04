import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/bur-dubai/textile-souk'] || {
  title: 'AC Repair & Maintenance in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}