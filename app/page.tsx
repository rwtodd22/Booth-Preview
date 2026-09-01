'use client';

import { useState } from 'react';
import { ChevronRight, Menu, Minus, Plus, X } from 'lucide-react';

const productImages = ['/product/view-1.webp', '/product/view-2.webp', '/product/view-3.webp'];
const details = [
  ['Product Details', 'A complete 10x20 modular exhibit kit with an extended locking storage room, four-panel backlit display, side return, L-connectors, and standard counter. Printed graphics are included.'],
  ['Dimensions', '20 ft wide × 10 ft deep. Components pack down for streamlined transport and repeat use.'],
  ['What’s Included', 'Backlit display, storage room, side return, connectors, counter, hardware, and printed graphics.'],
  ['Shipping & Setup', 'Designed for trade show installation with reusable modular components and labeled hardware.'],
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [openDetail, setOpenDetail] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f4f3] text-[#171717]">
      <header className="site-shell pt-5">
        <div className="flex h-[72px] items-center justify-between rounded-2xl bg-white px-5 shadow-[0_1px_0_rgba(0,0,0,.02)] sm:px-7">
          <a href="#top" aria-label="Worth Higgins & Associates home" className="shrink-0"><img src="/wha-logo.png" alt="Worth Higgins & Associates" className="h-auto w-[190px] sm:w-[230px]" /></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-10 text-[17px] font-medium md:flex"><a href="#product" className="transition-colors hover:text-wha">Products</a><a href="#resources" className="transition-colors hover:text-wha">Resources</a></nav>
          <button aria-label="Open menu" className="grid size-11 place-items-center rounded-full bg-[#f0f0ef] md:hidden" onClick={() => setMobileOpen(true)}><Menu className="size-6" /></button>
        </div>
      </header>

      {mobileOpen && <div className="fixed inset-0 z-50 bg-white p-6 md:hidden"><div className="flex items-center justify-between"><img src="/wha-logo.png" alt="Worth Higgins & Associates" className="w-[210px]" /><button aria-label="Close menu" className="grid size-11 place-items-center rounded-full bg-[#f0f0ef]" onClick={() => setMobileOpen(false)}><X /></button></div><nav className="mt-14 grid gap-3 text-3xl font-semibold"><a href="#product" onClick={() => setMobileOpen(false)} className="border-b py-5">Products</a><a href="#resources" onClick={() => setMobileOpen(false)} className="border-b py-5">Resources</a></nav></div>}

      <div id="top" className="site-shell mt-4"><div className="flex min-h-[76px] items-center rounded-2xl bg-[#dededd] px-6 sm:px-10"><div className="flex flex-wrap items-center gap-2 text-base font-medium text-[#555] sm:text-lg"><a href="#top" className="hover:text-black">Home</a><ChevronRight className="size-5 text-[#999]" /><a href="#product" className="hover:text-black">Products</a><ChevronRight className="size-5 text-[#999]" /><span className="text-[#202020]">10x20 Kit G-214</span></div></div></div>

      <section id="product" className="site-shell grid gap-10 py-20 lg:grid-cols-[minmax(0,1.7fr)_minmax(330px,.85fr)] lg:gap-11 lg:py-24">
        <div className="grid min-w-0 gap-4 sm:grid-cols-[120px_minmax(0,1fr)]">
          <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">{productImages.map((src, index) => <button key={src} onClick={() => setActiveImage(index)} aria-label={`View product image ${index + 1}`} className={`aspect-square w-[96px] shrink-0 overflow-hidden rounded-2xl bg-[#d6d6d5] ring-offset-2 transition sm:w-full ${activeImage === index ? 'ring-2 ring-wha' : 'opacity-80 hover:opacity-100'}`}><img src={src} alt="" className="h-full w-full object-cover" /></button>)}</div>
          <div className="order-1 aspect-square overflow-hidden rounded-2xl bg-[#d6d6d5] sm:order-2"><img src={productImages[activeImage]} alt={`10x20 Kit G-214 exhibit display, view ${activeImage + 1}`} className="h-full w-full object-cover" /></div>
        </div>
        <div className="self-start lg:pt-2">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[.13em] text-[#777]">Worth Higgins Exhibits</p>
          <h1 className="text-[clamp(2.5rem,4.2vw,4.7rem)] font-semibold leading-[.98] tracking-[-.045em] text-wha">10x20 Kit G-214</h1>
          <p className="mt-5 text-lg">SKU: HW-G-214</p><span className="mt-3 inline-flex rounded-full bg-[#dededd] px-4 py-2 text-sm font-semibold">Looboo</span>
          <p className="mt-8 max-w-xl text-[17px] leading-7 text-[#4f4f4f]">10x20 kit featuring an extended locking storage room, a four-panel backlit display, a side return attached with L-connectors, and a standard counter. Kit includes printed graphics.</p>
          <h2 className="mt-8 text-xl font-semibold">Features:</h2><div className="mt-3 flex flex-wrap gap-3"><span className="rounded-full bg-[#dededd] px-5 py-2 font-medium">Storage Room</span><span className="rounded-full bg-[#dededd] px-5 py-2 font-medium">Backlit</span></div>
          <div className="mt-10 border-t border-[#d6d6d4]">{details.map(([title, copy], index) => <div key={title} className="border-b border-[#d6d6d4]"><button className="flex w-full items-center justify-between py-5 text-left text-[17px] font-semibold" onClick={() => setOpenDetail(openDetail === index ? null : index)} aria-expanded={openDetail === index}>{title}{openDetail === index ? <Minus className="size-5" /> : <Plus className="size-5" />}</button>{openDetail === index && <p className="max-w-xl pb-6 leading-7 text-[#555]">{copy}</p>}</div>)}</div>
        </div>
      </section>

      <section id="resources" className="bg-[#202020] text-white"><div className="site-shell grid gap-10 py-16 sm:grid-cols-[1fr_auto] sm:items-end"><div><img src="/wha-logo.png" alt="Worth Higgins & Associates" className="w-[260px] brightness-0 invert" /><p className="mt-7 max-w-lg text-lg leading-8 text-white/65">Creative print and exhibit solutions built to help your brand show up beautifully.</p></div><a href="#top" className="text-sm font-semibold uppercase tracking-[.14em] text-white/70 hover:text-white">Back to top ↑</a></div></section>
    </main>
  );
}
