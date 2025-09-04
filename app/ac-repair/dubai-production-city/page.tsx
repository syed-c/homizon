import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-production-city'] || {
  title: 'AC Repair & Maintenance in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiProductionCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-production-city"
      areaName="Dubai Production City"
    />
  );
}