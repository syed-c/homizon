import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/downtown-dubai/burj-khalifa-area'] || {
  title: 'Appliance Repairs in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}