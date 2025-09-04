import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-greens/al-sedr'] || {
  title: 'Pest Control in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}