import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-rashidiya'] || {
  title: 'Bathroom Plumbing in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlRashidiyaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-rashidiya"
      areaName="Al Rashidiya"
    />
  );
}