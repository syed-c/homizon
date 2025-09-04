import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/bur-dubai'] || {
  title: 'Appliance Repairs in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}