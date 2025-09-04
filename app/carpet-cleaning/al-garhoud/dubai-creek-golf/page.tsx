import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-garhoud/dubai-creek-golf'] || {
  title: 'Carpet Cleaning in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}