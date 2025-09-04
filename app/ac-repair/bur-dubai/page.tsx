import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/bur-dubai'] || {
  title: 'AC Repair & Maintenance in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}