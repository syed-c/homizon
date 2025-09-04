import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-khawaneej/khawaneej-1'] || {
  title: 'Appliance Repairs in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}