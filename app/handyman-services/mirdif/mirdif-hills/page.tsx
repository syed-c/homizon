import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/mirdif/mirdif-hills'] || {
  title: 'Handyman Services in Mirdif Hills, Mirdif - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Mirdif Hills, Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesMirdifMirdifHillsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="mirdif"
      areaName="Mirdif"
      subArea="mirdif-hills"
      subAreaName="Mirdif Hills"
    />
  );
}