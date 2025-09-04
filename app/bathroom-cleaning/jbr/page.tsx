import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jbr'] || {
  title: 'Bathroom Deep Cleaning in JBR - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jbr"
      areaName="JBR"
    />
  );
}