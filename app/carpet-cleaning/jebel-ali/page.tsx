import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jebel-ali'] || {
  title: 'Carpet Cleaning in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}