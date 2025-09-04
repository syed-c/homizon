import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-garhoud/dubai-creek-golf'] || {
  title: 'Bathroom Deep Cleaning in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}