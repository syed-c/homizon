import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jvc'] || {
  title: 'Appliance Repairs in JVC - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jvc"
      areaName="JVC"
    />
  );
}