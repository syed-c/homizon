import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/deira/al-rigga'] || {
  title: 'AC Servicing in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}