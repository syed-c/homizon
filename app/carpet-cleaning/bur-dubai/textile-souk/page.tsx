import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/bur-dubai/textile-souk'] || {
  title: 'Carpet Cleaning in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}