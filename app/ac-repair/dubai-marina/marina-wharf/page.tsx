import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-marina/marina-wharf'] || {
  title: 'AC Repair & Maintenance in Marina Wharf - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Marina Wharf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMarinaWharfPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-wharf"
      subareaName="Marina Wharf"
    />
  );
}