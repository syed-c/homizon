import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/arabian-ranches/alvorada'] || {
  title: 'AC Servicing in Alvorada - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Alvorada. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlvoradaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="alvorada"
      subareaName="Alvorada"
    />
  );
}