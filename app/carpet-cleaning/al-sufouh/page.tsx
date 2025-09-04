import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-sufouh'] || {
  title: 'Carpet Cleaning in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}