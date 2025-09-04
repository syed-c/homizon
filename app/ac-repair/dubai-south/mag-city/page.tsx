import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-south/mag-city'] || {
  title: 'AC Repair & Maintenance in MAG City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}