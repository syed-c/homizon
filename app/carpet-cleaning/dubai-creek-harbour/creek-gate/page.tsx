import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-creek-harbour/creek-gate'] || {
  title: 'Carpet Cleaning in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}