import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/mirdif/ghoroob'] || {
  title: 'Appliance Repairs in Ghoroob - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Ghoroob. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGhoroobPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="mirdif"
      areaName="Mirdif"
      subarea="ghoroob"
      subareaName="Ghoroob"
    />
  );
}