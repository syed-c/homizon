import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-greens'] || {
  title: 'Appliance Repairs in The Greens - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-greens"
      areaName="The Greens"
    />
  );
}