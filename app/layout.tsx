import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '10x20 Kit G-214 | Worth Higgins & Associates',
  description: 'Explore the WHA 10x20 G-214 modular trade show exhibit kit with backlit display, locking storage room, and printed graphics.',
  openGraph: {
    title: '10x20 Kit G-214 | Worth Higgins & Associates',
    description: 'A modular 10x20 trade show exhibit with a backlit display and locking storage room.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '10x20 Kit G-214 by Worth Higgins & Associates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10x20 Kit G-214 | Worth Higgins & Associates',
    description: 'A modular 10x20 trade show exhibit with a backlit display and locking storage room.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
