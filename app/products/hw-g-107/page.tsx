import type { Metadata } from 'next';
import { ProductDetail } from '@/components/product-detail';
import { g107 } from '@/lib/products';

export const metadata: Metadata = {
  title: '10x10 Kit G-107 | Worth Higgins & Associates',
  description: 'Explore the WHA 10x10 G-107 modular trade show exhibit with backlit display, storage room, monitor bracket, and counter.',
  openGraph: { title: '10x10 Kit G-107 | Worth Higgins & Associates', description: g107.description, images: [{ url: g107.images[0], alt: g107.name }] },
  twitter: { card: 'summary_large_image', title: '10x10 Kit G-107 | Worth Higgins & Associates', description: g107.description, images: [g107.images[0]] },
};

export default function G107Page() { return <ProductDetail product={g107} />; }
