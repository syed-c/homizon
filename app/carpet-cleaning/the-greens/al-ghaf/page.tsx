import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-greens/al-ghaf'] || {
  title: 'Carpet Cleaning in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}