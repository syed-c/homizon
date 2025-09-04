import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-satwa/satwa-central'] || {
  title: 'AC Repair & Maintenance in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}