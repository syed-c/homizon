import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-knowledge-park'] || {
  title: 'AC Repair & Maintenance in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}