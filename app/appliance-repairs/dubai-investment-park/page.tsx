import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-investment-park'] || {
  title: 'Appliance Repairs in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}