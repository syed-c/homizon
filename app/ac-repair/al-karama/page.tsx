import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-karama'] || {
  title: 'AC Repair & Maintenance in Al Karama - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}