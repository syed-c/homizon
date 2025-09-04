import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/deira'] || {
  title: 'Carpet Cleaning in Deira - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="deira"
      areaName="Deira"
    />
  );
}