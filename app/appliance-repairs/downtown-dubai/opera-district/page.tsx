import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/downtown-dubai/opera-district'] || {
  title: 'Appliance Repairs in Opera District - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}