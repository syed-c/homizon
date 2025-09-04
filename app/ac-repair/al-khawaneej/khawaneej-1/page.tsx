import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-khawaneej/khawaneej-1'] || {
  title: 'AC Repair & Maintenance in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}