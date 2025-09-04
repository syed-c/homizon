import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jbr'] || {
  title: 'Bathroom Plumbing in JBR - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jbr"
      areaName="JBR"
    />
  );
}