import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-springs'] || {
  title: 'Carpet Cleaning in The Springs - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-springs"
      areaName="The Springs"
    />
  );
}