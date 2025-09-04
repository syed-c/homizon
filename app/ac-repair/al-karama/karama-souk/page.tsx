import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-karama/karama-souk'] || {
  title: 'AC Repair & Maintenance in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}