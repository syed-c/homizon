import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-warqa/warqa-2'] || {
  title: 'AC Servicing in Warqa 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Warqa 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingWarqa2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-2"
      subareaName="Warqa 2"
    />
  );
}