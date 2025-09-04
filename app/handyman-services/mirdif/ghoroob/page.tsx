import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/mirdif/ghoroob'] || {
  title: 'Handyman Services in Ghoroob, Mirdif - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Ghoroob, Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesMirdifGhoroobPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="mirdif"
      areaName="Mirdif"
      subArea="ghoroob"
      subAreaName="Ghoroob"
    />
  );
}