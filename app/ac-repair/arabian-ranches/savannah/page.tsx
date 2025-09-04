import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/arabian-ranches/savannah'] || {
  title: 'AC Repair & Maintenance in Savannah - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}