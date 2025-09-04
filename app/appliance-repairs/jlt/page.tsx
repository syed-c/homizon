import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jlt'] || {
  title: 'Appliance Repairs in JLT - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jlt"
      areaName="JLT"
    />
  );
}