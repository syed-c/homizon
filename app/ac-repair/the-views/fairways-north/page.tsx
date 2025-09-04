import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-views/fairways-north'] || {
  title: 'AC Repair & Maintenance in Fairways North - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}