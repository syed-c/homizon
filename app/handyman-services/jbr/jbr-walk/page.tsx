import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jbr/jbr-walk'] || {
  title: 'Handyman Services in Jbr Walk, JBR - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Jbr Walk, JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJbrJbrWalkPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jbr"
      areaName="JBR"
      subArea="jbr-walk"
      subAreaName="Jbr Walk"
    />
  );
}