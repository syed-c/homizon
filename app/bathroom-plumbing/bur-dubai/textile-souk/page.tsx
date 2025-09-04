import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/bur-dubai/textile-souk'] || {
  title: 'Bathroom Plumbing in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}