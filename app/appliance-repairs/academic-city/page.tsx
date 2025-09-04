import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/academic-city'] || {
  title: 'Appliance Repairs in Academic City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="academic-city"
      areaName="Academic City"
    />
  );
}