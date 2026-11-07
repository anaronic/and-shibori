'use client';
import { useMemo, useState } from 'react';
import { categories, pieces, site } from '@/data/site';

export default function Collection() {
  const [active, setActive] = useState<string>('All pieces');
  const filtered = useMemo(() => active === 'All pieces' ? pieces : pieces.filter(p => p.category === active), [active]);
  return <>
    <div className="filter-row" role="tablist" aria-label="Filter pieces by category">
      {categories.map(category => <button key={category} role="tab" aria-selected={active === category} className={`filter ${active === category ? 'active' : ''}`} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    <div className="piece-grid">
      {filtered.map((piece, i) => <article className="piece-card" key={piece.id}>
        <a className="piece-image-wrap" href={`https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(`Hello, I would like to enquire about ${piece.name} (${piece.id}) from And Shibori.`)}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${piece.name}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="piece-image" src={piece.image} alt={`${piece.name} textile inspiration`} style={{ objectPosition: piece.position }} loading={i > 2 ? 'lazy' : 'eager'} />
          <span className="image-cta">Enquire about this piece ↗</span>
        </a>
        <div className="piece-meta"><div><p className="eyebrow">{piece.category} · {piece.id}</p><h3>{piece.name}</h3><p className="piece-note">{piece.note}</p></div><span className="piece-arrow">↗</span></div>
      </article>)}
    </div>
    <p className="demo-note">These are placeholder entries and reference photographs for the demo, not verified And Shibori products.</p>
  </>;
}
