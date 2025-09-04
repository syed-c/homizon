import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/deira/gold-souk-area'] || {
  title: 'Bathroom Plumbing in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}