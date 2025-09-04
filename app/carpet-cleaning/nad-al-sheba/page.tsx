import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/nad-al-sheba'] || {
  title: 'Carpet Cleaning in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}