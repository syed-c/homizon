import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-sports-city/golf-horizon'] || {
  title: 'AC Repair & Maintenance in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}