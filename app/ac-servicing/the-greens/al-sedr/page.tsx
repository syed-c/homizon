import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-greens/al-sedr'] || {
  title: 'AC Servicing in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}