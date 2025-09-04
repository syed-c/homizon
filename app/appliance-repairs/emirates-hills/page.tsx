import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/emirates-hills'] || {
  title: 'Appliance Repairs in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}