import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jumeirah/al-manara'] || {
  title: 'AC Servicing in Al Manara - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}