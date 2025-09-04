import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-rashidiya/rashidiya-1'] || {
  title: 'AC Servicing in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}