import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-karama'] || {
  title: 'Bathroom Plumbing in Al Karama - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}