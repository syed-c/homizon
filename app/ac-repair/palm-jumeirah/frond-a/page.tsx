import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/palm-jumeirah/frond-a'] || {
  title: 'AC Repair & Maintenance in Frond A - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Frond A. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceFrondAPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-a"
      subareaName="Frond A"
    />
  );
}