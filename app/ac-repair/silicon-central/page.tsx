import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/silicon-central'] || {
  title: 'AC Repair & Maintenance in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}