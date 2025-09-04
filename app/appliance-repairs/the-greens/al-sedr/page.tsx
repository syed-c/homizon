import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-greens/al-sedr'] || {
  title: 'Appliance Repairs in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}