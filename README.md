# Bookery
Backend code repository for [Bookery app](https://github.com/bharati-21/bookery)

## Tech Stack
- Express.js
- Node.js
- MongoDB
- Mongoose

## Features:
- This code has following routes:
  - [Auth](https://github.com/bharati-21/bookery-server/blob/main/routes/auth.router.js):
    - Login: `[POST] - /api/auth/login` 
    - Signup: `[POST] - /api/auth/signup`
  - [Categories](https://github.com/bharati-21/bookery-server/blob/main/routes/categories.router.js):
    - `[GET, POST] - /api/categories`
    - `[GET] - /api/categories/:categoryId`
    - 
  - [Products](https://github.com/bharati-21/bookery-server/blob/main/routes/products.router.js):
    - `[GET] - /api/products`
    - `[GET] - /api/products/:productsId`
  - [Users](https://github.com/bharati-21/bookery-server/blob/main/routes/users.router.js):
    - Cart
      - `[GET, POST] - /api/users/cart/`
      - `[POST, DELETE] - /api/users/cart/:productId`
      - `[GET] - /api/users/cart/clear`
    - Wishlist
      - `[GET, POST] - /api/users/wishlist`
      - `[DELETE] - /api/users/wishlist/:productId`
    - Address
      - `[GET, POST] - /api/users/addresses`
      - `[POST, DELETE] - /api/users/addresses/:addressId`
    - Orders
      - `[GET, POST] - /api/users/orders`
  
