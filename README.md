# TrendCircuit - E-commerce Website

TrendCircuit is a responsive e-commerce website built using React, Redux, and Bootstrap. It showcases a variety of products using the Fake Store API and serves as a portfolio project to demonstrate front-end development skills. The website features a modern, user-friendly interface, category-based product filtering, a shopping cart with Redux state management, and a mock checkout flow.

## 🌐 Live Demo

[View Live Site](https://bilalhabib020.github.io/trend-circuit/)

## 🛠️ Tech Stack

- React
- Redux (for state management)
- Bootstrap (for responsive design)
- React Router (for navigation)
- Fake Store API (for product data)

## 🚀 Features

- **Product Categories:** Browse men's clothing, women's clothing, jewelry, and electronics.
- **Responsive Design:** Fully optimized for desktop and mobile devices.
- **Shopping Cart:** Add, remove, and view items using Redux.
- **Mock Checkout:** Simulate a checkout process with name, email, shipping address, and payment details.
- **Section-Based Navigation:** Smooth scrolling within the homepage.
- **Hamburger Menu:** Mobile-friendly navigation menu.
- **Product Details Modal:** View detailed product information in a modal instead of navigating to a new page.
- **Animations:** Smooth animations and transitions for better user experience.

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/bilalhabib020/trendcircuit.git
    ```

2. Navigate to the project directory:
    ```bash
    cd trendcircuit
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm start
    ```

## ⚙️ Usage

- Open `http://localhost:3000` in your browser.
- Browse products, add items to your cart, and go through the mock checkout process.

## 🖼️ Screenshots

### Homepage
![Homepage Screenshot](https://via.placeholder.com/600x400)

### Product Details Modal
![Product Details](https://via.placeholder.com/600x400)

### Checkout Page
![Checkout Page](https://via.placeholder.com/600x400)

## 🧩 Folder Structure

```
.
├── public
├── src
    ├── components
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── ProductList.jsx
    │   ├── ProductDetailsModal.jsx
    │   ├── Cart.jsx
    │   ├── Checkout.jsx
    │   └── Contact.jsx
    ├── redux
    │   ├── store.js
    │   └── cartSlice.js
    ├── App.jsx
    └── index.js
├── package.json
└── README.md
```

## 🔍 API Reference

This project uses the [Fake Store API](https://fakestoreapi.com/) to retrieve product data.

**API Endpoint:**
```bash
https://fakestoreapi.com/products
```

## 🛒 Redux Store Structure

```json
{
  "cart": {
    "cartItems": [
      {
        "id": 1,
        "title": "Product Name",
        "price": 29.99,
        "quantity": 2
      }
    ]
  }
}
```

## 🐞 Known Issues & Improvements

- Improve the product filtering performance.
- Enhance animations with more interactive transitions.
- Optimize media queries for better responsiveness.

## 🧑‍💻 Author

- **Your Name** – [GitHub](https://github.com/bilalhabib020) | [LinkedIn](https://linkedin.com/in/bilalhabib020)

## 📄 License

This project is licensed under the MIT License.

---

### ⭐️ If you like this project, consider giving it a star! 🌟

