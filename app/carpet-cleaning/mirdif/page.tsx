import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/mirdif'] || {
  title: 'Carpet Cleaning in Mirdif - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="mirdif"
      areaName="Mirdif"
    />
  );
}