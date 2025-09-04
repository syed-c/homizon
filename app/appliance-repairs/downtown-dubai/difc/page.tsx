import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/downtown-dubai/difc'] || {
  title: 'Appliance Repairs in DIFC - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in DIFC. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDIFCPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="difc"
      subareaName="DIFC"
    />
  );
}