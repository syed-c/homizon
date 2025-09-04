import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/deira/al-rigga'] || {
  title: 'Bathroom Plumbing in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}