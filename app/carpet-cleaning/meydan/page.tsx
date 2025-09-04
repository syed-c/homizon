import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/meydan'] || {
  title: 'Carpet Cleaning in Meydan - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="meydan"
      areaName="Meydan"
    />
  );
}