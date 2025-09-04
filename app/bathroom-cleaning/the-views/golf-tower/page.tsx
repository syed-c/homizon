import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/the-views/golf-tower'] || {
  title: 'Bathroom Deep Cleaning in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}