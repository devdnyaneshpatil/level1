#  Product Management System

## Description
Our Product management system is a streamlined platform where individuals can create, update, and view products within a vibrant community 

## Features
- **Create account:** Users can create their acoount.
- **Create Seller account:** Seller can create their acoount.
- **Add product:** Sellers can add product.
- **Update product:** Sellers can update product.
- **Delete product:** Sellers can delete product.
- **Add product to cart:** Users can add items to cart.
- **Remove product from cart:** Users can add items to cart.

## Installation

### For Backend Server
1. Clone the repository: `https://github.com/devdnyaneshpatil/level1.git`
2. Navigate to the project directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file.
5. Add MongoDB URL in the `.env` file for connection: `PG_DB_URI = <Postgres Database URL>`
6. Add JWT_SECRET_KEY in the `.env` file: `JWT_SECRET_KEY = <Your JWT secret key>`
7. Add the port number in the `.env` file: `PORT = <port number>`
10. Start the backend server: `npm run dev`



## Tech Stack
- **Backend:** NodeJs, Express, Postgresql, JSON Web Token (JWT),bcrypt.


## API Endpoints

-**BaseUrl** `https://user-manangement-2.onrender.com/api/v1`

### Auth Routes

#### 1. Register

- **Endpoint:** `POST /auth/signup`
- **Description:** Registers a new user.
- **Parameters:**
  - `name` (string): User's name.
  - `email` (string): User's email address.
  - `password` (string): User's password.
   - `role` (string): User's role ("Buyer or "Seller only").
- **Response:**
  - Success: 200 OK, User Created successfully, along with user details and authentication token.
  - Conflict: 409 conflict, User already exists.
  - Error: 400 Bad Request, Error message.

#### 2. Login
- **Endpoint:** `POST /auth/login`
- **Description:** Logs in an existing user.
- **Parameters:**
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Response:**
  - Success: 200 OK, Login successful, along with authentication token.
  - Not Found: 404 OK, User not found.
  - Unauthorized: 401 OK, Incorrect password.
  - Error: 400 Bad Request, Error message.


### Product Routes

#### 1. Add Product Details
- **Endpoint:** `POST /products/add`
- **Description:** Adding product details to the database.
- **Parameters:**
  - `name` (string): Name of product (required field).
  - `price` (Integer): Price of product (required field).
  - `description` (string): Name of product.
  - `discount` (float): Price of product.
  - `category` (string): Name of product (required field).
- **Authentication:** Requires a valid authentication token.
- **Response:**
  - Success: 201 created, Product added successfully.
  - Error: 400 Bad Request, Error message.

#### 2. Update  product details 
- **Endpoint:** `PATCH /products/:id`
- **Description:** Update product details.
- **Parameters:**
  - `name` (string): Name of product (required field).
  - `price` (Integer): Price of product (required field).
  - `description` (string): Name of product.
  - `discount` (Float): Price of product.
  - `category` (string): Name of product (required field).
- **Param:**
  - `id` (Integer): id of the product.
- **Authentication:** Requires a valid authentication token.
- **Response:**
  - Success: 200 OK, product updated successfully.
  - Error: 400 Bad Request, Error message.

  #### 3. Delete  product details 
- **Endpoint:** `DELETE /products/:id`
- **Description:** DELETE product details.
- **Param:**
  - `id` (Integer): id of the product.
- **Authentication:** Requires a valid authentication token.
- **Response:**
  - Success: 200 OK, product deleted successfully.
  - Error: 400 Bad Request, Error message.

  #### 4. GET  individual product details 
- **Endpoint:** `GET /products/:id`
- **Description:**  product details.
- **Param:**
  - `id` (Integer): id of the product.
- **Response:**
  - Success: 200 OK, product details.
  - Error: 400 Bad Request, Error message.

   #### 4. GET  ALl product details 
- **Endpoint:** `GET /products/`
- **Description:**  product details.
- **Response:**
  - Success: 200 OK,All product details.
  - Error: 400 Bad Request, Error message.

### Cart Routes

#### 1. ADD product to cart
- **Endpoint:** `POST /cart/add/:id`
- **Description:** Adding product to cart.
- **Parameters:**
  - `id` (Integer): product id.
- **Request Body:**
  - can be quantity
- **Authentication:** Requires a valid authentication token.
- **Response:**
  - Success: 200 OK, product added successsfully.
  - Not Found: 404 Not found , product not found
  - Error: 400 Bad Request, Error message.

#### 2. Remove product from cart
- **Endpoint:** `POST /cart/remove/:id`
- **Description:** Remove product from cart.
- **Parameters:**
  - `id` (Integer): product id.
- **Authentication:** Requires a valid authentication token.
- **Response:**
  - Success: 200 OK, product removed successsfully.
  - Error: 400 Bad Request, Error message.

#### 3. Get cart product details
- **Endpoint:** `GET /cart/`
- **Description:** Get cart product details.
- **Authentication:** Requires authentication.
- **Response:**
  - Success: 200 OK,  Product details.
  - Error: 400 Bad Request, Error message.

## Flow:- 
  - I have Designed the flow like E-commerce where first the user have to either register  or login through mail then it will be redirected to the dashboard where he can see the  all products and can see individula product details . seller can add the product and user can ser=arch the product according to name or category user can add the product to cart and remove from cart and get cart product details.

## Deployed Links

## demo admin credentials
email:- omkar@gmail.com
password: Password@123

- **Backend:** [https://user-manangement-2.onrender.com]
- **Frontend:** [https://user-manangement-ssqv.vercel.app/]

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.