import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-creek-harbour/creek-horizon'] || {
  title: 'Carpet Cleaning in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}