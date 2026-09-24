import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Advisory | OTHO Realty',
  description: 'Initiate a private advisory consultation with OTHO Realty for real estate acquisitions in Hyderabad.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
