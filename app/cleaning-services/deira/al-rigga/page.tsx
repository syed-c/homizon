import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/deira/al-rigga'] || {
  title: 'Cleaning Services in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}