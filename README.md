# Library management system server

Library Management System that allows library staff and members to manage books, memberships, and borrowing activities. The API will be structured around CRUD operations for books, members, and borrow records, with additional endpoints for borrowing and returning books.

- Live URL: https://library-management-system-server-six.vercel.app

## **Technologies**

- **Prisma ORM**
- **Node.js**
- **PostgreSQL**
- **Express.js**
- **TypeScript**

---

## 🌟 Features

- 📖 Book and User Management
- 🔄 Borrowing and Returning Functionality
- 🛠️ Prisma ORM Integration
- 🔧 Development and Production Modes

---

## 🚀 Getting Started

Follow these steps to set up and run the application locally.

### 📋 Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 16 or higher
- **npm**: Comes with Node.js
- **TypeScript**: Optional but recommended for global installation
- **Prisma CLI**: (Install globally with `npm install -g prisma` if needed)

---

### 📦 Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd library-management-system-server
   ```

2. **Install Dependencies**
   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Generate Prisma Client**
   After installation, generate the Prisma client:
   ```bash
   npx prisma generate
   ```

---

### ⚙️ Configuration

1. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```bash
   DATABASE_URL=your-database-url
   PORT=your-server-port
   ```

- Replace your-database-url with your database connection string.
- Replace your-server-port with the port where your server should run (default: 5000).

---

## 🚀 Running the Server

Choose the appropriate mode to run the server:

### 🔧 Development Mode

Run the server with hot-reloading for active development:

```bash
npm run dev
```

### 🛠️ Production Mode

Build the project and run it in production mode:

```bash
npm run build
npm run prod
```

---

## 📝 Additional Notes

- Prisma Migrations
  To apply changes to the database schema and generate new Prisma client files, use:

```bash
npx prisma migrate dev --name <migration-name>
```

- Environment Variables
  Double-check that all required variables in the `.env` file are correctly set to avoid runtime issues.

## Key Features & Functionality:

### **1. Book CRUD Operations**

- **Create Book**  
  Creates a new book record in the library’s database.

  **Endpoint:** `POST /api/books`

  **Request Body:**

  ```json
  {
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 201,
    "message": "Book created successfully",
    "data": {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird",
      "genre": "Fiction",
      "publishedYear": 1960,
      "totalCopies": 10,
      "availableCopies": 10
    }
  }
  ```

- **Read All Books**  
  Retrieves a list of all books in the library.

  **Endpoint:** `GET /api/books`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Books retrieved successfully",
    "data": [
      {
        "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publishedYear": 1960,
        "totalCopies": 10,
        "availableCopies": 10
      }
    ]
  }
  ```

- **Read Book by ID**  
  Fetches details of a specific book by its `bookId`.

  **Endpoint:** `GET /api/books/:bookId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book retrieved successfully",
    "data": {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird",
      "genre": "Fiction",
      "publishedYear": 1960,
      "totalCopies": 10,
      "availableCopies": 10
    }
  }
  ```

- **Update Book**  
  Updates information of an existing book by its `bookId`.

  **Endpoint:** `PUT /api/books/:bookId`

  **Request Body:**

  ```json
  {
    "title": "To Kill a Mockingbird - Revised",
    "genre": "Classic Fiction",
    "publishedYear": 1961,
    "totalCopies": 12,
    "availableCopies": 8
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book updated successfully",
    "data": {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird - Revised",
      "genre": "Classic Fiction",
      "publishedYear": 1961,
      "totalCopies": 12,
      "availableCopies": 8
    }
  }
  ```

- **Delete Book**  
  Deletes a book from the library by its `bookId`.

  **Endpoint:** `DELETE /api/books/:bookId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book successfully deleted"
  }
  ```

---

### **2. Member CRUD Operations**

- **Create Member**  
  Adds a new member to the library.

  **Endpoint:** `POST /api/members`

  **Request Body:**

  ```json
  {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "123-456-7890",
    "membershipDate": "2024-01-01T00:00:00.000Z"
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 201,
    "message": "Member created successfully",
    "data": {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "123-456-7890",
      "membershipDate": "2024-01-01T00:00:00.000Z"
    }
  }
  ```

- **Read All Members**  
  Retrieves a list of all members in the library.

  **Endpoint:** `GET /api/members`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Members retrieved successfully",
    "data": [
      {
        "memberId": "8765-4321-1098",
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "phone": "123-456-7890",
        "membershipDate": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
  ```

- **Read Member by ID**  
  Fetches details of a specific member by their `memberId`.

  **Endpoint:** `GET /api/members/:memberId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Member retrieved successfully",
    "data": {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "123-456-7890",
      "membershipDate": "2024-01-01T00:00:00.000Z"
    }
  }
  ```

- **Update Member**  
  Updates information for a specific member by their `memberId`.

  **Endpoint:** `PUT /api/members/:memberId`

  **Request Body:**

  ```json
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "098-765-4321"
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Member updated successfully",
    "data": {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "098-765-4321"
    }
  }
  ```

- **Delete Member**  
  Deletes a member from the library by their `memberId`.

  **Endpoint:** `DELETE /api/members/:memberId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Member successfully deleted"
  }
  ```

---

### **3. Borrow & Return Books**

#### **Borrow a Book**

- **Endpoint:** `POST /api/borrow`
- **Request Body:**
  ```json
  {
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "memberId": "a24df67b-1234-5678-9101-b2a3c5d7f098"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book borrowed successfully",
    "data": {
      "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f",
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "memberId": "8765-4321-1098",
      "borrowDate": "2024-09-01T10:00:00.000Z"
    }
  }
  ```

#### **Return a Book**

- **Endpoint:** `POST /api/return`
- **Request Body:**
  ```json
  {
    "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book returned successfully"
  }
  ```

---

### **1. Error Handling for Library System**

When an error occurs in the system, the following structure use in the response:

```json
{
  "success": false,
  "status": <HTTP_STATUS_CODE>,
  "message": "<Error message>",
}
```

### **Explanation**:

- **success**: Always show `false` in case of an error to indicate failure.
- **status**: The HTTP status code that corresponds to the error (e.g., 404 for not found, 400 for bad request, 500 for server errors).
- **message**: A short description of the error, providing a general overview of what went wrong (e.g., "Invalid book ID", "No available copies").

### **2. Overdue Borrow List**

- Endpoint: GET /api/borrow/overdue
- **Description**: Track overdue borrowed books. A list of books that are past the due date for return.
- **Functionality**:

  - Calculate overdue books based on the due date.
  - Provide a list of overdue items with borrower details.

- **Return Policy:** All borrowed books must be returned within 14 days from the borrow date.

- **Response**:
  - If overdue books exist:
    ```json
    {
      "success": true,
      "status": 200,
      "message": "Overdue borrow list fetched",
      "data": [
        {
          "borrowId": "b1234",
          "bookTitle": "To Kill a Mockingbird",
          "borrowerName": "John Doe",
          "overdueDays": 5
        }
      ]
    }
    ```
  - If no overdue books:
    ```json
    {
      "success": true,
      "status": 200,
      "message": "No overdue books",
      "data": []
    }
    ```

---

#### You're all set! 🎉 Happy coding! 🛠️
