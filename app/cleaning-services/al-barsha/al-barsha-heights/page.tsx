import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-barsha/al-barsha-heights'] || {
  title: 'Cleaning Services in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}