import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jbr/beach-residence-1'] || {
  title: 'Appliance Repairs in Beach Residence 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Beach Residence 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBeachResidence1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-1"
      subareaName="Beach Residence 1"
    />
  );
}