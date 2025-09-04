import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-qusais/qusais-2'] || {
  title: 'AC Servicing in Qusais 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Qusais 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingQusais2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-2"
      subareaName="Qusais 2"
    />
  );
}