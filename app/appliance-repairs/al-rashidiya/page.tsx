import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-rashidiya'] || {
  title: 'Appliance Repairs in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlRashidiyaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-rashidiya"
      areaName="Al Rashidiya"
    />
  );
}