import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jebel-ali'] || {
  title: 'Pest Control in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional pest control services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}