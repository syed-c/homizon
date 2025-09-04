import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/city-walk'] || {
  title: 'AC Repair & Maintenance in City Walk - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="city-walk"
      areaName="City Walk"
    />
  );
}