import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jbr/beach-residence-2'] || {
  title: 'Appliance Repairs in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}