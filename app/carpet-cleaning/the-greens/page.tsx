import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-greens'] || {
  title: 'Carpet Cleaning in The Greens - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-greens"
      areaName="The Greens"
    />
  );
}