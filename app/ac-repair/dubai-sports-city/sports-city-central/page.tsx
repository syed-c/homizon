import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-sports-city/sports-city-central'] || {
  title: 'AC Repair & Maintenance in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}