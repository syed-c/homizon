import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-mizhar/mizhar-1'] || {
  title: 'AC Repair & Maintenance in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}