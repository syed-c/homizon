import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-south/golf-links'] || {
  title: 'AC Repair & Maintenance in Golf Links - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}