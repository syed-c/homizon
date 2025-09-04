import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/deira/al-rigga'] || {
  title: 'Carpet Cleaning in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}