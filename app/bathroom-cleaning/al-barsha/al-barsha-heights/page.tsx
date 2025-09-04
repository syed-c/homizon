import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-barsha/al-barsha-heights'] || {
  title: 'Bathroom Deep Cleaning in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}