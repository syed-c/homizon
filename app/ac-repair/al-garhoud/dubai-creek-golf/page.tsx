import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-garhoud/dubai-creek-golf'] || {
  title: 'AC Repair & Maintenance in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}