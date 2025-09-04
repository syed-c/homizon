import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-greens/al-nakheel'] || {
  title: 'Cleaning Services in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}