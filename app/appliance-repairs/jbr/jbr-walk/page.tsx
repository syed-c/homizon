import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jbr/jbr-walk'] || {
  title: 'Appliance Repairs in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}