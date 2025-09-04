import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-rashidiya/rashidiya-2'] || {
  title: 'AC Servicing in Rashidiya 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Rashidiya 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingRashidiya2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-2"
      subareaName="Rashidiya 2"
    />
  );
}