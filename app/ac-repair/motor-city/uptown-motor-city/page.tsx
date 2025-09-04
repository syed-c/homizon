import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/motor-city/uptown-motor-city'] || {
  title: 'AC Repair & Maintenance in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}