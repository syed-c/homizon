import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/deira'] || {
  title: 'Appliance Repairs in Deira - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="deira"
      areaName="Deira"
    />
  );
}