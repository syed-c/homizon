import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/bur-dubai'] || {
  title: 'Carpet Cleaning in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}