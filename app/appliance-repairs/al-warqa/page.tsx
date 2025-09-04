import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-warqa'] || {
  title: 'Appliance Repairs in Al Warqa - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlWarqaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-warqa"
      areaName="Al Warqa"
    />
  );
}