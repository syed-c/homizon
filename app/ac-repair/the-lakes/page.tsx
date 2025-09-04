import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-lakes'] || {
  title: 'AC Repair & Maintenance in The Lakes - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}