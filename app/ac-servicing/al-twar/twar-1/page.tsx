import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-twar/twar-1'] || {
  title: 'AC Servicing in Twar 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Twar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTwar1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-1"
      subareaName="Twar 1"
    />
  );
}