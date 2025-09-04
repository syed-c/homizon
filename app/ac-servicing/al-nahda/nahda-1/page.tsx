import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-nahda/nahda-1'] || {
  title: 'AC Servicing in Nahda 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Nahda 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingNahda1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-1"
      subareaName="Nahda 1"
    />
  );
}