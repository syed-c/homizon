import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-festival-city/al-badia-residences'] || {
  title: 'AC Repair & Maintenance in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}