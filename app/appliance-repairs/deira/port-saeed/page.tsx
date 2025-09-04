import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/deira/port-saeed'] || {
  title: 'Appliance Repairs in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}