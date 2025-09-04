import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jumeirah/al-manara'] || {
  title: 'Appliance Repairs in Al Manara - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}