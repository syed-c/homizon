import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/motor-city'] || {
  title: 'AC Repair & Maintenance in Motor City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="motor-city"
      areaName="Motor City"
    />
  );
}