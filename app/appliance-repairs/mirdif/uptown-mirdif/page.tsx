import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/mirdif/uptown-mirdif'] || {
  title: 'Appliance Repairs in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}