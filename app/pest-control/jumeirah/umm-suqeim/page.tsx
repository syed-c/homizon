import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jumeirah/umm-suqeim'] || {
  title: 'Pest Control in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional pest control services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}