import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/bur-dubai/textile-souk'] || {
  title: 'AC Servicing in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}