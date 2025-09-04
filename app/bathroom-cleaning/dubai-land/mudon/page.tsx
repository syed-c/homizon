import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-land/mudon'] || {
  title: 'Bathroom Deep Cleaning in Mudon - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Mudon. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMudonPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="mudon"
      subareaName="Mudon"
    />
  );
}