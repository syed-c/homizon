import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/deira/spice-souk-area'] || {
  title: 'Appliance Repairs in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}