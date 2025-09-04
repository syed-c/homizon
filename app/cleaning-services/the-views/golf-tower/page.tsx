import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-views/golf-tower'] || {
  title: 'Cleaning Services in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}