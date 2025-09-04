import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/motor-city/green-community'] || {
  title: 'AC Repair & Maintenance in Green Community - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}