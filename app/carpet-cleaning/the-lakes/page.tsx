import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-lakes'] || {
  title: 'Carpet Cleaning in The Lakes - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}