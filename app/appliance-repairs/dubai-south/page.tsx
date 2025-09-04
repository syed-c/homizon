import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-south'] || {
  title: 'Appliance Repairs in Dubai South - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}