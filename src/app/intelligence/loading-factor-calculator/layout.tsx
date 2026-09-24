import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loading Factor Calculator — True Cost Per Usable Sq Ft',
  description: 'Calculate the real cost per usable square foot. Compare developer-quoted SBA rates against actual RERA carpet area to reveal true loading factors across Hyderabad projects.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
