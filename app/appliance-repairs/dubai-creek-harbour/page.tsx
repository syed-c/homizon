import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-creek-harbour'] || {
  title: 'Appliance Repairs in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}