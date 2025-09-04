import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-investment-park/dip-1'] || {
  title: 'AC Repair & Maintenance in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}