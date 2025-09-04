import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jbr'] || {
  title: 'AC Servicing in JBR - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jbr"
      areaName="JBR"
    />
  );
}