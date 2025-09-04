import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-karama'] || {
  title: 'AC Servicing in Al Karama - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}