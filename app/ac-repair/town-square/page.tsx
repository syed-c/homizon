import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/town-square'] || {
  title: 'AC Repair & Maintenance in Town Square - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="town-square"
      areaName="Town Square"
    />
  );
}