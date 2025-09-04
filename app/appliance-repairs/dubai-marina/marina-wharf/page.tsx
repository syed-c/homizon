import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-marina/marina-wharf'] || {
  title: 'Appliance Repairs in Marina Wharf - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Marina Wharf. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMarinaWharfPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-wharf"
      subareaName="Marina Wharf"
    />
  );
}