import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/meydan'] || {
  title: 'Appliance Repairs in Meydan - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="meydan"
      areaName="Meydan"
    />
  );
}