import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/downtown-dubai/dubai-mall-district'] || {
  title: 'Appliance Repairs in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}