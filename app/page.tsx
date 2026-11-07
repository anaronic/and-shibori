import Image from 'next/image';
import Header from '@/components/Header';
import Collection from '@/components/Collection';
import { site } from '@/data/site';

export default function Home() {
  const wa = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent('Hello, I would love to enquire about And Shibori pieces.')}`;
  return <main id="top">
    <div className="announcement">HANDCRAFTED TEXTILES · ROOTED IN TRADITION, MADE TO BE DISTINCT</div>
    <Header />
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow light">INDIAN BANDHANI × JAPANESE SHIBORI</p><h1>A tradition,<br/><em>tied into art.</em></h1><p className="hero-description">{site.intro}</p><a className="button button-light" href="#collection">Discover the collection <span>↓</span></a><div className="hero-index"><span>01</span><span className="index-line"/><span>CRAFTED WITH INTENTION</span></div></div>
      <div className="hero-visual"><div className="hero-photo"/><div className="hero-stamp"><span>THE ART OF</span><strong>RESIST<br/>DYEING</strong><span>AND SHIBORI · EST. WITH CARE</span></div><p className="photo-caption">A dialogue between two textile traditions.</p></div>
    </section>
    <section className="intro-band"><p className="eyebrow">A MEETING OF WORLDS</p><p className="intro-statement">The beauty of <em>Bandhani.</em><br/>The poetry of <em>Shibori.</em><br/>One unmistakable expression.</p><p className="intro-aside">Each fold, knot and mark leaves its own signature. We celebrate the beautiful irregularity of work made by hand.</p></section>
    <section className="collection-section" id="collection"><div className="section-heading"><div><p className="eyebrow">A CURATED SELECTION</p><h2>Pieces with<br/><em>their own story.</em></h2></div><p className="section-aside">Explore a selection of our textile expressions. Every piece is individual; availability and details are shared on enquiry.</p></div><Collection /></section>
    <section className="craft-section" id="story"><div className="craft-image"><div className="craft-image-inner"/></div><div className="craft-copy"><p className="eyebrow">THE HANDMADE DIFFERENCE</p><h2>Not made<br/>to be <em>identical.</em></h2><p>And Shibori brings together the expressive spirit of Indian Bandhani and the meditative process of Japanese Shibori. The result is a world of pattern, texture and colour where no two marks need to be exactly alike.</p><p>Our work honours the time, touch and thoughtful process behind every creation.</p><a className="text-link" href="#contact">Get to know the work <span>↗</span></a></div></section>
    <section className="quote-section"><span className="quote-mark">“</span><p>There is beauty in the mark<br/>that only the hand can make.</p><span className="eyebrow">THE AND SHIBORI PHILOSOPHY</span></section>
    <section className="contact-section" id="contact"><div><p className="eyebrow light">A PIECE CAUGHT YOUR EYE?</p><h2>Let's find<br/><em>your piece.</em></h2><p className="contact-copy">For availability, pricing or a little more about a piece, we'd love to hear from you.</p></div><div className="contact-actions"><a className="contact-link primary" href={wa} target="_blank" rel="noreferrer"><span>WhatsApp us</span><b>↗</b></a><a className="contact-link" href={site.instagram} target="_blank" rel="noreferrer"><span>Send an Instagram DM</span><b>↗</b></a><a className="contact-link" href={`tel:+${site.phoneDigits}`}><span>Call {site.phoneDisplay}</span><b>↗</b></a><p className="contact-small">We’ll be happy to help with product details and current availability.</p></div></section>
    <footer className="footer"><a href="#top" className="footer-logo" aria-label="And Shibori home"><Image src="/and-shibori-logo.png" alt="And Shibori logo" width={58} height={58} /></a><p>Handcrafted textile expressions.</p><div className="footer-right"><a href={site.instagram} target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="#top">BACK TO TOP ↑</a></div><small>© {new Date().getFullYear()} AND SHIBORI. ALL RIGHTS RESERVED.</small></footer>
  </main>;
}
