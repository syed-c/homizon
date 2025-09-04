import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-twar/twar-2'] || {
  title: 'AC Servicing in Twar 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Twar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTwar2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-2"
      subareaName="Twar 2"
    />
  );
}