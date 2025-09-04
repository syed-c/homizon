import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-investment-park/green-community-dip'] || {
  title: 'AC Repair & Maintenance in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}