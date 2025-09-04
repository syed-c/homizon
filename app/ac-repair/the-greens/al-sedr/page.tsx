import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-greens/al-sedr'] || {
  title: 'AC Repair & Maintenance in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}