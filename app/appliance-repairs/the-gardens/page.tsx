import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-gardens'] || {
  title: 'Appliance Repairs in The Gardens - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}