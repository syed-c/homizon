import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jbr/jbr-walk'] || {
  title: 'AC Servicing in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}