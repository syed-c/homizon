import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-land/living-legends'] || {
  title: 'Appliance Repairs in Living Legends - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}