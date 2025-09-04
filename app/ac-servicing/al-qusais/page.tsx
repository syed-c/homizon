import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-qusais'] || {
  title: 'AC Servicing in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}