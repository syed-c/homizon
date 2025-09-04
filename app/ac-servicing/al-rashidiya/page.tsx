import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-rashidiya'] || {
  title: 'AC Servicing in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlRashidiyaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-rashidiya"
      areaName="Al Rashidiya"
    />
  );
}