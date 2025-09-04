import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-festival-city/marsa-plaza'] || {
  title: 'AC Repair & Maintenance in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}