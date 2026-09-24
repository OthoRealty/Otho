import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { SmoothScroll } from '@/components/shared/smooth-scroll';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { cinzel, josefinSans, jetbrainsMono } from './fonts';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  wrapInGraph,
} from '@/lib/schema';
import { CustomCursor } from '@/components/shared/custom-cursor';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'OTHO Realty — Real Estate. With a clearer perspective.',
    template: '%s | OTHO Realty',
  },
  description: "Hyderabad's premier real estate advisory. Independent project intelligence, transparent analysis, and fiduciary-grade consultancy for discerning property seekers.",
  metadataBase: new URL('https://otho.co.in'),
  openGraph: {
    siteName: 'OTHO Realty',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = wrapInGraph(
  generateOrganizationSchema(),
  generateWebsiteSchema()
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${josefinSans.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
