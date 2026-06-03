# Vinteeks

A mobile-first furniture browsing experience for a local buy/sell business.

This app is designed to make it easy for customers to:

- browse inventory and search for specific items
- explore by room or category (e.g. dressers, sofas, lamps)
- quickly contact the seller

---

## 🧱 Project Structure

The app is built around a simple, intentional flow:

- `/` — Homepage (featured items + entry points)
- `/categories` — Browse categories (e.g. sofas, tables, lighting, etc.)
- `/categories/[category]` — View items in a specific category
- `/new-arrivals` — Browse new arrivals
- `/rooms` — Browse by room
- `/rooms/[room]` — View items in a specific room
- `/sale` — Optional: A page for items that are on sale or discounted (could be a filter on shop instead)
- `/shop` — Browse all inventory with search + filters
- `/products/[productId]` — Individual product detail pages with contact info and related items

- The only stateful pages are the product page where there's a need to manage selected images, and the shop page where there will be filters and search state
- Product and category data are fetched server-side and passed as props to the pages, so the pages themselves are mostly presentational and focused on rendering the UI and handling user interactions

---

## 🎯 Goals

- Keep the experience fast and mobile-first
- Prioritize real inventory over marketing
- Make it easy to find and act on items quickly

---

## 🔍 Features

- **Search**
  - Find items by name, category, room, or tags
  - Examples: `dresser`, `sofa`, `lamp`

- **Room Browsing**
  - Living Room, Bedroom, Dining, Office, etc.

- **Filtering**
  - Type (sofa, dresser, table, etc.)
  - Style (modern, vintage, farmhouse)
  - Color (optional / future)

- **BackLink Navigation**
  - Context-aware navigation between categories, shop, and products
  - Breadcrumbs on product pages to show category and room context
  - Navigation store keeps track of user paths via session storage, so that the back links will always take them back to where they came from, after page refresh, navigates to another URL and and returns through browser history, or navigate through multiple products or categories
  - Back link history is cleared when user returns to homepage, so that they can always start fresh from there

- **Contact Mike**
  - View in Marketplace and contact seller directly from product page

---

## 🧪 Tech Stack

- SvelteKit (Svelte 5)
- TypeScript
- Tailwind CSS (v4 theme config)
- AWS S3 for image and data storage and Cloudfront for CDN and hosting

---

## 🚀 Development

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```
