import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-marina/marina-promenade'] || {
  title: 'AC Repair & Maintenance in Marina Promenade - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Marina Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMarinaPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-promenade"
      subareaName="Marina Promenade"
    />
  );
}