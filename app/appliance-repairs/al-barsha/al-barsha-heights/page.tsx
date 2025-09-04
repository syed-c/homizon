import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-barsha/al-barsha-heights'] || {
  title: 'Appliance Repairs in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}