import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jbr/bahar'] || {
  title: 'Appliance Repairs in Bahar - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Bahar. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBaharPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jbr"
      areaName="JBR"
      subarea="bahar"
      subareaName="Bahar"
    />
  );
}