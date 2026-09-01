'use client';

import { useState } from 'react';
import { ChevronRight, Minus, Plus } from 'lucide-react';
import type { Product } from '@/lib/products';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [alternateImage, setAlternateImage] = useState(0);
  const [openDetail, setOpenDetail] = useState<number | null>(0);
  return <main className="min-h-screen bg-[#f4f4f3] text-[#171717]">
    <SiteHeader />
    <div id="top" className="site-shell mt-4"><div className="flex min-h-[76px] items-center rounded-2xl bg-[#dededd] px-6 sm:px-10"><div className="flex flex-wrap items-center gap-2 text-base font-medium text-[#555] sm:text-lg"><a href="/" className="hover:text-black">Home</a><ChevronRight className="size-5 text-[#999]" /><a href="/products" className="hover:text-black">Products</a><ChevronRight className="size-5 text-[#999]" /><span className="text-[#202020]">{product.name}</span></div></div></div>
    <section className="site-shell grid gap-10 py-20 lg:grid-cols-[minmax(0,1.7fr)_minmax(330px,.85fr)] lg:gap-11 lg:py-24">
      <div className="grid min-w-0 gap-4 sm:grid-cols-[120px_minmax(0,1fr)]"><div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">{product.images.map((src, index) => <button key={src} onClick={() => setActiveImage(index)} aria-label={`View product image ${index + 1}`} className={`aspect-square w-[96px] shrink-0 overflow-hidden rounded-2xl bg-[#d6d6d5] ring-offset-2 transition sm:w-full ${activeImage === index ? 'ring-2 ring-wha' : 'opacity-80 hover:opacity-100'}`}><img src={src} alt="" className="h-full w-full object-cover" /></button>)}</div><div className="order-1 aspect-square overflow-hidden rounded-2xl bg-[#d6d6d5] sm:order-2"><img src={product.images[activeImage]} alt={`${product.name} exhibit display, view ${activeImage + 1}`} className="h-full w-full object-cover" /></div></div>
      <div className="self-start lg:pt-2"><p className="mb-2 text-sm font-semibold uppercase tracking-[.13em] text-[#777]">Worth Higgins Exhibits</p><h1 className="text-[clamp(2.5rem,4.2vw,4.7rem)] font-semibold leading-[.98] tracking-[-.045em] text-wha">{product.name}</h1><p className="mt-5 text-lg">SKU: {product.sku}</p><span className="mt-3 inline-flex rounded-full bg-[#dededd] px-4 py-2 text-sm font-semibold">{product.brand}</span><p className="mt-8 max-w-xl text-[17px] leading-7 text-[#4f4f4f]">{product.description}</p><h2 className="mt-8 text-xl font-semibold">Features:</h2><div className="mt-3 flex flex-wrap gap-3">{product.features.map(feature => <span key={feature} className="rounded-full bg-[#dededd] px-5 py-2 font-medium">{feature}</span>)}</div><div className="mt-10 border-t border-[#d6d6d4]">{product.details.map(([title, copy], index) => <div key={title} className="border-b border-[#d6d6d4]"><button className="flex w-full items-center justify-between py-5 text-left text-[17px] font-semibold" onClick={() => setOpenDetail(openDetail === index ? null : index)} aria-expanded={openDetail === index}>{title}{openDetail === index ? <Minus className="size-5" /> : <Plus className="size-5" />}</button>{openDetail === index && <p className="max-w-xl pb-6 leading-7 text-[#555]">{copy}</p>}</div>)}</div></div>
    </section>
    {product.alternateConfiguration && <section className="border-y border-black/5 bg-white py-20 sm:py-28">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.14em] text-wha">{product.alternateConfiguration.eyebrow}</p><h2 className="mt-3 max-w-xl text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[.98] tracking-[-.055em]">{product.alternateConfiguration.title}</h2></div><p className="max-w-2xl text-lg leading-8 text-[#555] lg:justify-self-end">{product.alternateConfiguration.description}</p></div>
        <div className="mt-12 overflow-hidden rounded-3xl bg-[#d4d4d3]"><img src={product.alternateConfiguration.images[alternateImage].src} alt={`${product.name} used in a 20x20 space — ${product.alternateConfiguration.images[alternateImage].label}`} className="aspect-[16/10] w-full object-cover" /></div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">{product.alternateConfiguration.images.map((image, index) => <button key={image.src} onClick={() => setAlternateImage(index)} className={`group overflow-hidden rounded-2xl bg-[#dededd] text-left ring-offset-2 ${alternateImage === index ? 'ring-2 ring-wha' : ''}`} aria-label={`Show ${image.label}`}><img src={image.src} alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /><span className="block px-3 py-3 text-sm font-semibold">{image.label}</span></button>)}</div>
        <p className="mt-5 text-sm text-[#777]">20x20 configuration shown for spatial and graphic-placement reference.</p>
      </div>
    </section>}
    <SiteFooter />
  </main>;
}
