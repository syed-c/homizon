import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-rashidiya'] || {
  title: 'Cleaning Services in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlRashidiyaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-rashidiya"
      areaName="Al Rashidiya"
    />
  );
}