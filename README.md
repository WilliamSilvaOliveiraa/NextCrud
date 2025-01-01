# Product Management Frontend With NextJS

![Preview da Interface](https://i.imgur.com/Xdztme0.png)

A React-based frontend application for managing products, built with Next.js and Tailwind CSS.

## 🎨 Interface

The application consists of two main sections:

- Product Form: For creating and updating products
- Product List: Displays all products with options to edit or delete

## 🚀 Features

- Create new products
- List all products
- Update existing products
- Delete products
- Responsive design with Tailwind CSS

## 💻 Technologies

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS

## 🔧 Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Ensure the backend server is running on `http://localhost:3001`

## 🔄 State Management

The application uses React's useState hook to manage:

- Current product being edited
- List of all products

## 📡 API Integration

- GET `/produtos` - Fetch all products
- POST `/produtos` - Create new product
- PATCH `/produtos/:id` - Update existing product
- DELETE `/produtos/:id` - Remove product
