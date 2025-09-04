import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-greens/al-ghaf'] || {
  title: 'AC Servicing in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}