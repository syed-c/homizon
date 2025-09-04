import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-gardens'] || {
  title: 'Bathroom Plumbing in The Gardens - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}