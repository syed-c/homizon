import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-khawaneej/khawaneej-2'] || {
  title: 'AC Servicing in Khawaneej 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Khawaneej 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingKhawaneej2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-2"
      subareaName="Khawaneej 2"
    />
  );
}