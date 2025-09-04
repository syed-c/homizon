import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-quoz'] || {
  title: 'Bathroom Deep Cleaning in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}