import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-mamzar'] || {
  title: 'AC Servicing in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}