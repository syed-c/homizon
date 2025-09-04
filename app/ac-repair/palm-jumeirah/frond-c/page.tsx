import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/palm-jumeirah/frond-c'] || {
  title: 'AC Repair & Maintenance in Frond C - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}