import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-greens/al-nakheel'] || {
  title: 'Appliance Repairs in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}