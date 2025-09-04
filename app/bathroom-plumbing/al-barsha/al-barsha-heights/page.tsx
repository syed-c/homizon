import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-barsha/al-barsha-heights'] || {
  title: 'Bathroom Plumbing in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}