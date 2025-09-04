import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/bur-dubai/textile-souk'] || {
  title: 'Bathroom Deep Cleaning in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}