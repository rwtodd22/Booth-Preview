'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <>
    <header className="site-shell pt-5"><div className="flex h-[72px] items-center justify-between rounded-2xl bg-white px-5 shadow-[0_1px_0_rgba(0,0,0,.02)] sm:px-7">
      <a href="/" aria-label="Worth Higgins & Associates home" className="shrink-0"><img src="/wha-logo.png" alt="Worth Higgins & Associates" className="h-auto w-[190px] sm:w-[230px]" /></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-10 text-[17px] font-medium md:flex"><a href="/products" className="transition-colors hover:text-wha">Products</a><a href="#resources" className="transition-colors hover:text-wha">Resources</a></nav>
      <button aria-label="Open menu" className="grid size-11 place-items-center rounded-full bg-[#f0f0ef] md:hidden" onClick={() => setMobileOpen(true)}><Menu className="size-6" /></button>
    </div></header>
    {mobileOpen && <div className="fixed inset-0 z-50 bg-white p-6 md:hidden"><div className="flex items-center justify-between"><img src="/wha-logo.png" alt="Worth Higgins & Associates" className="w-[210px]" /><button aria-label="Close menu" className="grid size-11 place-items-center rounded-full bg-[#f0f0ef]" onClick={() => setMobileOpen(false)}><X /></button></div><nav className="mt-14 grid gap-3 text-3xl font-semibold"><a href="/products" className="border-b py-5">Products</a><a href="#resources" onClick={() => setMobileOpen(false)} className="border-b py-5">Resources</a></nav></div>}
  </>;
}
