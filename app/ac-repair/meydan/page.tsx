import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/meydan'] || {
  title: 'AC Repair & Maintenance in Meydan - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="meydan"
      areaName="Meydan"
    />
  );
}