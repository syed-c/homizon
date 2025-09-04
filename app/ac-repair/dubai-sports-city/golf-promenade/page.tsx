import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-sports-city/golf-promenade'] || {
  title: 'AC Repair & Maintenance in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}