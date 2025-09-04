import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-karama/karama-residential'] || {
  title: 'AC Repair & Maintenance in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}