import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-land/mudon'] || {
  title: 'Cleaning Services in Mudon - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Mudon. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMudonPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="mudon"
      subareaName="Mudon"
    />
  );
}