import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/deira/al-rigga'] || {
  title: 'Appliance Repairs in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}