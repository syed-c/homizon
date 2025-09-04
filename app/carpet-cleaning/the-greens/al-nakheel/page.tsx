import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-greens/al-nakheel'] || {
  title: 'Carpet Cleaning in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}