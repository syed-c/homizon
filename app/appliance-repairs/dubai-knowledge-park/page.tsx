import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-knowledge-park'] || {
  title: 'Appliance Repairs in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}