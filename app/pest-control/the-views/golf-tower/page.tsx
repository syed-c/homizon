import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-views/golf-tower'] || {
  title: 'Pest Control in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional pest control services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}