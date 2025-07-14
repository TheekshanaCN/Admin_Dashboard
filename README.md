# 🛠️ MERN Admin Dashboard

A simple full-stack Admin Dashboard project to showcase MERN stack skills. Includes JWT Auth, protected routes, product CRUD, and a responsive UI with Tailwind CSS.

---

## ✅ Features

- User Register / Login with JWT Auth
- Protected Dashboard
- Sidebar Navigation
- View Product Table (GET)
- Add New Product (POST)
- Delete Product (DELETE)
- Update Product (PUT)
- Responsive UI (Tailwind + Vite + React)
- MongoDB integration (Mongoose)
- Light/Dark Theme Ready (optional toggle)
- Clean Dev-Friendly Folder Structure

---

## 🧾 Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS
- Axios
- React Router

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Dotenv, Cors

---

## 🏁 Getting Started

### 1. Clone the Project
```bash
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
```

### 2. Setup Backend
```bash
cd server
npm install
# Create .env and add:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
npm run dev
```

### 3. Setup Frontend
```bash
cd client
npm install
npm run dev
```

---

## 🔐 API Endpoints

**Auth**
- `POST /api/auth/register`
- `POST /api/auth/login`

**Items**
- `GET /api/items`
- `POST /api/items`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`

(All item routes require `Authorization: Bearer <token>` header)

---

## 📁 Folder Structure

```
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
└── client
    ├── public
    ├── src
    │   ├── components
    │   ├── context
    │   ├── pages
    │   ├── layout
    │   ├── utils
    │   └── App.jsx
```

> Built with ❤️ by Theekshana Chamodhya