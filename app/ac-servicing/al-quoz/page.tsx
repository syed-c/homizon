import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-quoz'] || {
  title: 'AC Servicing in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}