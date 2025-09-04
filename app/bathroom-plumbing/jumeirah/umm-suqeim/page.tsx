import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jumeirah/umm-suqeim'] || {
  title: 'Bathroom Plumbing in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}