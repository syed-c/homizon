import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jlt'] || {
  title: 'Handyman Services in JLT - Professional Services | HOMIZON',
  description: 'Professional handyman services services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJltPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jlt"
      areaName="JLT"
      
      
    />
  );
}