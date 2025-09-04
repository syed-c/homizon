import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-mizhar'] || {
  title: 'AC Repair & Maintenance in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}