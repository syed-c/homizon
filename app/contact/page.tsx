import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ContactPageContent from '@/components/contact-page-content';

export const metadata: Metadata = siteMetadata['/contact'];

export default function ContactPage() {
  return <ContactPageContent />;
}
