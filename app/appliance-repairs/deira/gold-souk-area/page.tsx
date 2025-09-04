import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/deira/gold-souk-area'] || {
  title: 'Appliance Repairs in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}