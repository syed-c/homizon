import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-barsha'] || {
  title: 'Bathroom Plumbing in Al Barsha - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBarshaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-barsha"
      areaName="Al Barsha"
    />
  );
}