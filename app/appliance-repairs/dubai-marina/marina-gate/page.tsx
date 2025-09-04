import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-marina/marina-gate'] || {
  title: 'Appliance Repairs in Marina Gate - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Marina Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMarinaGatePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-gate"
      subareaName="Marina Gate"
    />
  );
}