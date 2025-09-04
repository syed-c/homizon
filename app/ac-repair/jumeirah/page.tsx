import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jumeirah'] || {
  title: 'AC Repair & Maintenance in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}