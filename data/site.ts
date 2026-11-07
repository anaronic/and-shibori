export const site = {
  name: 'AND SHIBORI',
  instagram: 'https://www.instagram.com/and_shibori/',
  // Contact details supplied by the brand owner.
  phoneDisplay: '+91 98312 96864',
  phoneDigits: '919831296864',
  whatsappDigits: '919831296864',
  email: '',
  tagline: 'A tradition, tied into art.',
  intro: 'An exploration of Indian Bandhani and Japanese Shibori, brought together through the poetry of handcrafted textiles.'
};

export const categories = ['All pieces', 'Sarees', 'Dupattas', 'Apparel', 'Accessories'] as const;
export type Category = typeof categories[number];

// Demonstration catalogue: replace these sample entries with real And Shibori pieces.
export const pieces = [
  { id: 'AS-001', name: 'Indigo Reverie', category: 'Sarees', note: 'A study in rhythm, resist and indigo.', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=85', position: 'center' },
  { id: 'AS-002', name: 'Monsoon Bloom', category: 'Dupattas', note: 'Soft movement with a hand-drawn feel.', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1100&q=85', position: 'center' },
  { id: 'AS-003', name: 'Blue Hour', category: 'Apparel', note: 'A contemporary silhouette in resist-dyed texture.', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e5?auto=format&fit=crop&w=1100&q=85', position: 'center' },
  { id: 'AS-004', name: 'River Lines', category: 'Accessories', note: 'A quiet composition of pattern and negative space.', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1100&q=85', position: 'center' },
  { id: 'AS-005', name: 'Neelkanth', category: 'Sarees', note: 'Layered blues inspired by shifting water.', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1100&q=85', position: 'center' },
  { id: 'AS-006', name: 'Desert Petal', category: 'Dupattas', note: 'An earthy take on a timeless tied pattern.', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1100&q=85', position: 'center' }
] as const;
