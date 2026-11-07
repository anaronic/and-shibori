import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'And Shibori — Handcrafted textile art',
  description: 'An exploration of Indian Bandhani and Japanese Shibori, brought together through handcrafted textiles.',
  metadataBase: new URL('https://andshibori.example'),
  openGraph: { title: 'And Shibori', description: 'A tradition, tied into art.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
