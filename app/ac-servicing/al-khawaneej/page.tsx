import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-khawaneej'] || {
  title: 'AC Servicing in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlKhawaneejPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-khawaneej"
      areaName="Al Khawaneej"
    />
  );
}