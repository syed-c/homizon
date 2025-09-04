import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-marina'] || {
  title: 'Appliance Repairs in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}