import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-satwa/satwa-central'] || {
  title: 'AC Servicing in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}