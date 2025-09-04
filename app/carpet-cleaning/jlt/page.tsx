import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jlt'] || {
  title: 'Carpet Cleaning in JLT - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jlt"
      areaName="JLT"
    />
  );
}