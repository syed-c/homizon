import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barari'] || {
  title: 'Carpet Cleaning in Al Barari - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}