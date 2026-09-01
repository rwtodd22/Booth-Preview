import { ArrowUpRight } from 'lucide-react';
import { products } from '@/lib/products';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ProductsPage() {
  return <main id="top" className="min-h-screen bg-[#f4f4f3] text-[#171717]"><SiteHeader />
    <section className="site-shell py-16 sm:py-24"><p className="text-sm font-semibold uppercase tracking-[.14em] text-[#777]">Worth Higgins Exhibits</p><h1 className="mt-3 text-[clamp(3.6rem,8vw,7.5rem)] font-semibold leading-none tracking-[-.06em]">Products</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#555]">Explore modular trade show displays designed to make your brand easy to see, easy to remember, and easy to take on the road.</p>
      <div className="mt-14 grid gap-7 md:grid-cols-2">{products.map(product => <a key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-3xl bg-white"><div className="aspect-[1.18] overflow-hidden bg-[#d7d7d6]"><img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div><div className="flex items-start justify-between gap-6 p-6 sm:p-8"><div><div className="flex flex-wrap gap-2">{product.features.map(feature => <span key={feature} className="rounded-full bg-[#ededeb] px-3 py-1 text-sm font-medium">{feature}</span>)}</div><h2 className="mt-5 text-3xl font-semibold tracking-[-.035em] text-wha">{product.name}</h2><p className="mt-2 text-sm font-semibold text-[#777]">SKU: {product.sku}</p><p className="mt-4 max-w-xl leading-7 text-[#555]">{product.description}</p></div><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f0f0ee] transition-colors group-hover:bg-wha group-hover:text-white"><ArrowUpRight /></span></div></a>)}</div>
    </section><SiteFooter /></main>;
}
