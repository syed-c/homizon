import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-mamzar'] || {
  title: 'AC Repair & Maintenance in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}