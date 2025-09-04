import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-views/golf-tower'] || {
  title: 'Handyman Services in Golf Tower, The Views - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Golf Tower, The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheViewsGolfTowerPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-views"
      areaName="The Views"
      subArea="golf-tower"
      subAreaName="Golf Tower"
    />
  );
}