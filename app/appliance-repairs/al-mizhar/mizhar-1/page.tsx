import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-mizhar/mizhar-1'] || {
  title: 'Appliance Repairs in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}