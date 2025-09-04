import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-khawaneej'] || {
  title: 'Bathroom Plumbing in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlKhawaneejPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-khawaneej"
      areaName="Al Khawaneej"
    />
  );
}