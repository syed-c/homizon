import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/business-bay/canal-views'] || {
  title: 'AC Repair & Maintenance in Canal Views - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}