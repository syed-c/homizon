import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-media-city'] || {
  title: 'AC Repair & Maintenance in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}