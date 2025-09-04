import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-land/mudon'] || {
  title: 'Bathroom Plumbing in Mudon - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Mudon. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMudonPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="mudon"
      subareaName="Mudon"
    />
  );
}