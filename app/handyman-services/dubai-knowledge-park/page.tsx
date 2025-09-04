import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-knowledge-park'] || {
  title: 'Handyman Services in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
      
      
    />
  );
}