import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-internet-city'] || {
  title: 'AC Repair & Maintenance in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}