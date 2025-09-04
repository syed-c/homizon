import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-views/golf-tower'] || {
  title: 'AC Servicing in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}