import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-festival-city/marsa-plaza'] || {
  title: 'AC Servicing in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}