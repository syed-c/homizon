import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barsha/al-barsha-heights'] || {
  title: 'Carpet Cleaning in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}