import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-khawaneej'] || {
  title: 'Appliance Repairs in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlKhawaneejPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-khawaneej"
      areaName="Al Khawaneej"
    />
  );
}