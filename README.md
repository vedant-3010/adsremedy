# Online Restaurant Service API

This project implements a REST API for a hypothetical online restaurant service. It allows users to manage products (menu items), place orders, and view order history.

## Features

- CRUD operations for managing products (menu items)
- Place orders for products
- View order history

## Technologies Used

- Node.js
- Express.js
- MongoDB
- body-parser
- mongoose
- express-async-handler
- nodemon

## Installation

 1. Clone the repository:
     ```bash
     git clone https://github.com/yourusername/online-restaurant-service.git
     ```
2. Navigate to the project directory
    ```bash
    cd online-restaurant-service
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a .env file in the root directory and define the following environment variables:

    ```bash
    PORT=5000
    MONGODB_URI=your_mongodb_connection_uri
    ```

## Usage

Start the server:

  ```bash
  npm start
  ```
The API will be available at http://localhost:5000.

## API Endpoints

### /products

- **GET**: Get all products
- **POST**: Create a new product

### /products/:id

- **GET**: Get a product by ID
- **PATCH**: Update a product by ID
- **DELETE**: Delete a product by ID

### /orders

- **GET**: Get all orders
- **POST**: Place a new order

### /orders/:id

- **GET**: Get an order by ID

### Feel free to explore the application and share your feedback! 😊

## License
This project is licensed under the ISC License.


