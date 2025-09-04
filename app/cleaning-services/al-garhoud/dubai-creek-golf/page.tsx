import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-garhoud/dubai-creek-golf'] || {
  title: 'Cleaning Services in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}