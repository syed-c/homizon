import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/bur-dubai/al-fahidi'] || {
  title: 'Carpet Cleaning in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}