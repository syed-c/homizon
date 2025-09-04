import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jbr/beach-residence-3'] || {
  title: 'Appliance Repairs in Beach Residence 3 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Beach Residence 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBeachResidence3Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-3"
      subareaName="Beach Residence 3"
    />
  );
}