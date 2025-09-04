import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/deira/al-rigga'] || {
  title: 'Bathroom Deep Cleaning in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}