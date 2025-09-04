import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-creek-harbour'] || {
  title: 'Bathroom Plumbing in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}