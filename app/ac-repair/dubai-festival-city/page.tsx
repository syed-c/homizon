import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-festival-city'] || {
  title: 'AC Repair & Maintenance in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}