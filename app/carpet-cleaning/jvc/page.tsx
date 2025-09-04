import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jvc'] || {
  title: 'Carpet Cleaning in JVC - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jvc"
      areaName="JVC"
    />
  );
}