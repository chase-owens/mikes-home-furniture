# Mike’s Home Furniture

A mobile-first furniture browsing experience for a local buy/sell business.

This app is designed to make it easy for customers to:

- browse inventory
- explore by room
- search for specific items (e.g. dressers, sofas, lamps)
- quickly contact the seller

---

## 🧱 Project Structure

The app is built around a simple, intentional flow:

- `/` — Homepage (featured items + entry points)
- `/categories` — Browse by room
- `/categories/[category]` — View items in a specific room
- `/shop` — Browse all inventory with search + filters
- `/products/[productId]` — Individual product detail

---

## 🎯 Goals

- Keep the experience fast and mobile-first
- Prioritize real inventory over marketing
- Make it easy to find and act on items quickly

---

## 🔍 Features

- **Search**
  - Find items by name, category, or tags
  - Examples: `dresser`, `sofa`, `lamp`

- **Category Browsing**
  - Living Room, Bedroom, Dining, Office, etc.

- **Filtering (in progress)**
  - Type (sofa, dresser, table, etc.)
  - Style (modern, vintage, farmhouse)
  - Color (optional / future)

- **BackLink Navigation**
  - Context-aware navigation between categories, shop, and products

- **Contact Mike**
  - View in Marketplace and contact seller directly from product page

- **View Product in Context**
  - View product in a room setting to help visualize scale and style

---

## 🧪 Tech Stack

- SvelteKit (Svelte 5)
- TypeScript
- Tailwind CSS (v4 theme config)
- Local data (no backend yet)

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
