import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-gardens'] || {
  title: 'Carpet Cleaning in The Gardens - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}