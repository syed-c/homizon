import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-gardens'] || {
  title: 'Pest Control in The Gardens - Professional Services | HOMIZON',
  description: 'Professional pest control services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}