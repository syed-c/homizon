import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barsha/al-barsha-1'] || {
  title: 'Carpet Cleaning in Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarsha1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-1"
      subareaName="Al Barsha 1"
    />
  );
}