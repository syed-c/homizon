import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-south/pulse-beachfront'] || {
  title: 'AC Repair & Maintenance in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenancePulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}