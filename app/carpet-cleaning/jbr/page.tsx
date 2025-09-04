import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jbr'] || {
  title: 'Carpet Cleaning in JBR - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jbr"
      areaName="JBR"
    />
  );
}