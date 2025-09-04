import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-investment-park/dip-2'] || {
  title: 'Carpet Cleaning in DIP 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in DIP 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDIP2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-2"
      subareaName="DIP 2"
    />
  );
}