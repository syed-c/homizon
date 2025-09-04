import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-twar/twar-1'] || {
  title: 'AC Repair & Maintenance in Twar 1 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Twar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTwar1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-1"
      subareaName="Twar 1"
    />
  );
}