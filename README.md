
# 🛍️ Product Comparison Web App

A responsive, interactive web app built with **React + Vite**, allowing users to browse a list of products and compare up to three of them side-by-side. Includes a smooth light/dark mode toggle, search functionality, and mobile responsiveness.

---

## 🚀 Features

- 🧾 **Product List View** with:
  - Product Name, Brand, Image, Price, and Features
  - "Add to Compare" toggle (up to 3 products)

- 🧮 **Compare Page**:
  - Automatically navigates to `/compare` once 2+ items are selected
  - Side-by-side comparison of selected products
  - Remove individual items or clear all

- 🌗 **Dark/Light Mode Toggle**:
  - Smooth animated switch
  - Persists theme via `localStorage`

- 🔍 **Search Filter**:
  - Real-time filtering of products

- 📱 **Responsive Design**:
  - Optimized for mobile, tablet, and desktop using Tailwind’s utility classes

---

## ⚙️ Setup Instructions

> Ensure you have Node.js installed

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-comparison-app.git
cd product-comparison-app


Folder Structure 
src/
│
├── assets/                 # Images used for products
├── components/             # ProductCard, ProductList, ComparisonView
├── context/ThemeContext.jsx
├── data/products.js        # Static product data
├── App.jsx
├── main.jsx
└── index.css               # Tailwind setup + custom styling

