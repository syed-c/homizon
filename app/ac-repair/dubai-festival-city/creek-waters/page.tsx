import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-festival-city/creek-waters'] || {
  title: 'AC Repair & Maintenance in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}