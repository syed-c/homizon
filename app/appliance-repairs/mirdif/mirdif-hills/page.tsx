import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/mirdif/mirdif-hills'] || {
  title: 'Appliance Repairs in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}