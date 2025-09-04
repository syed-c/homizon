import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-quoz'] || {
  title: 'Carpet Cleaning in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}