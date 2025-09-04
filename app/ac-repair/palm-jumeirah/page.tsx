import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/palm-jumeirah'] || {
  title: 'AC Repair & Maintenance in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenancePalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}