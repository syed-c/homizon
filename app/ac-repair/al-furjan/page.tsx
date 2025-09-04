import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-furjan'] || {
  title: 'AC Repair & Maintenance in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}