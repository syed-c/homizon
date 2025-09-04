import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-mizhar/mizhar-2'] || {
  title: 'AC Repair & Maintenance in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}