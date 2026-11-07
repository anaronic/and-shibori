# And Shibori — curated brand showcase demo

A responsive Next.js 15 / React 19 frontend for a premium, editorial textile-art catalogue. This is a display-and-enquiry website: no cart, checkout, payment gateway or inventory management.

## What's included
- Editorial homepage with hero, brand philosophy, curated catalogue, story and contact sections.
- Category filters for the demo catalogue.
- WhatsApp, phone and Instagram contact links.
- Centralised content in `data/site.ts` so real brand content can replace demo entries without restructuring components.
- Responsive desktop, tablet and mobile layouts.

## Important demo placeholders
The current catalogue entries and Unsplash photographs are visual placeholders, not verified And Shibori products. Replace them with approved product photographs, names and descriptions before public launch.

Update `data/site.ts`:
- `phoneDisplay`: phone number shown on the contact section.
- `phoneDigits`: country code + number, digits only, for the `tel:` link.
- `whatsappDigits`: country code + number, digits only, for WhatsApp.
- `instagram`: current Instagram profile URL.
- `pieces`: curated product entries and image URLs.

The existing logo has not been supplied yet, so the demo uses a typographic AND SHIBORI wordmark. Replace the wordmark in `components/Header.tsx` and footer in `app/page.tsx` with the approved logo asset when available.

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js framework settings and deploy. No environment variables are required for this static demo.
4. Add the real domain in Vercel project settings when ready.

## Next integration phase
The first production content pipeline should use an authorised Meta Instagram Graph API connection for the professional account, with human approval before a social post becomes a catalogue item. The website itself can remain read-only and enquiry-led. Do not scrape Instagram HTML or expose Meta access tokens in browser code.

## Suggested content schema for production
Each catalogue item should have: `id`, `slug`, `name`, `category`, `description`, `fabric`, `technique`, `images[]`, `instagramPermalink`, `featured`, and `displayOrder`. Availability and price can remain enquiry-only and need not be stored publicly.
