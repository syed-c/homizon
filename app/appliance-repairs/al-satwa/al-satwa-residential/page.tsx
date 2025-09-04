import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-satwa/al-satwa-residential'] || {
  title: 'Appliance Repairs in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}