import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/arabian-ranches/savannah'] || {
  title: 'AC Servicing in Savannah - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}