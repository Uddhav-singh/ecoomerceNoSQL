ecommerceNoSQL/
├─ frontend/                 # React + Vite + Tailwind
│  ├─ index.html
│  ├─ package.json
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     ├─ pages/             # Home, Product, Cart, Checkout, Profile, Admin
│     ├─ components/        # Navbar, Footer, ProductCard, CartItem...
│     ├─ services/          # axios instances & API calls
│     └─ styles/
└─ backend/                  # Express + Mongoose
   ├─ package.json
   ├─ server.js             # app entry
   ├─ config/
   │  └─ db.js
   ├─ models/
   │  ├─ User.js
   │  ├─ Product.js
   │  ├─ Cart.js
   │  └─ Order.js
   ├─ routes/
   │  ├─ authRoutes.js
   │  ├─ productRoutes.js
   │  ├─ cartRoutes.js
   │  └─ orderRoutes.js
   ├─ controllers/
   │  └─ authController.js ...
   ├─ middleware/
   │  └─ authMiddleware.js, errorHandler.js
   
