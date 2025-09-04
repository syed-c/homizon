import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/business-bay/bay-avenue'] || {
  title: 'AC Repair & Maintenance in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}