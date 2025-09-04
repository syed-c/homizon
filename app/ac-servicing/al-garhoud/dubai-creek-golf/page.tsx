import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-garhoud/dubai-creek-golf'] || {
  title: 'AC Servicing in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}