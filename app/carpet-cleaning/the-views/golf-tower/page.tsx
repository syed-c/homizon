import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-views/golf-tower'] || {
  title: 'Carpet Cleaning in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}