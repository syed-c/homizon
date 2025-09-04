import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jumeirah/umm-suqeim'] || {
  title: 'Appliance Repairs in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}