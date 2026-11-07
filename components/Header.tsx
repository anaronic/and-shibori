'use client';
import { useState } from 'react';
import Image from 'next/image';
import { site } from '@/data/site';
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a href="#top" className="brand-logo" aria-label="And Shibori home"><Image src="/and-shibori-logo.png" alt="And Shibori logo" width={64} height={64} priority /></a>
    <nav className={open ? 'nav open' : 'nav'}>
      <a href="#collection" onClick={() => setOpen(false)}>The collection</a><a href="#story" onClick={() => setOpen(false)}>Our story</a><a href="#contact" onClick={() => setOpen(false)}>Enquiries</a>
    </nav>
    <a className="header-cta" href={site.instagram} target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? '×' : '☰'}</button>
  </header>;
}
