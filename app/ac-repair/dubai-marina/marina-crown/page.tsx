import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-marina/marina-crown'] || {
  title: 'AC Repair & Maintenance in Marina Crown - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Marina Crown. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMarinaCrownPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-crown"
      subareaName="Marina Crown"
    />
  );
}