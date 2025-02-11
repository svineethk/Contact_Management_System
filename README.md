# Contact Management System

This is a backend application built using Node.js, Express, and SQLite to manage contact information. It allows users to perform CRUD operations (Create, Read, Update, Delete) on contacts and search by name or email.

## Features

* CRUD operations: Create, retrieve, update, and delete contacts.
* Search: Search contacts by name and/or email.
* Validation: Contact data validation using Joi.
* SQLite: Uses SQLite database for storing contact data.

## Table of Contents

* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Running the Project](#running-the-project)
* [API Endpoints](#api-endpoints)
* [Example Project Structure](#example-project-structure)

## Installation

Follow these steps to set up the project on your local machine.

1. **Clone the repository:**

```bash
	git clone https://github.com/svineethk/Contact_Management_System
	npm start
```

2. **Install dependencies**

   npm install

3. **Set up the database**

    The project uses SQLite, and the database file (contacts.db) will be created automatically. There's no need for a separate database setup process.

4. **Start the application**

   npm start

5. **Environment Variables**

	You can configure the environment by creating a .env file in the root directory. This file should include:
    PORT=3000
	DB_PATH=./contacts.db

## Running the Project

**Starting the Development Server** 
    npm start


## API Endpoints

### Get all Contacts
- **Endpoint:** `GET /api/contacts`
- **Query Params (Optional):**
  - `name`: Search by contact name.
  - `email`: Search by contact email.
- **Example:**
  ```bash
  GET http://localhost:3000/api/contacts
  GET http://localhost:3000/api/contacts?name=John&email=john@example.com
  ```
  **Note:** Use ```%20``` for space in the name and email in the query parameter


  



### Get a contact by ID
- **Endpoint:** ```GET /api/contacts/:id```
- **Example**
  ```bash
  GET http://localhost:3000/api/contacts/1
  ```


  


### Create a New Contact
- **Endpoint:** ```POST /api/contacts```
- **Example:**
  ```bash
  POST http://localhost:3000/api/contacts
  ```
- **Request Body:**
  ```
  {
   "name": "John Doe",
   "email": "john.doe@example.com",
   "phone_number": "1234567890",
   "address": "123 Main Street"
  }
  ```





  ### Update a Contact
  - **Endpoint:** ```PUT /api/contacts/:id```
  - **Example:**
  ```bash
  PUT http://localhost:3000/api/contacts
  ```
  - **Request Body:**
  ```
  {
   "name": "John Updated",
   "email": "john.updated@example.com",
   "phone_number": "9876543210",
   "address": "456 Updated Street"
  }
  ```


  


### Delete a Contact 
- **Endpoint:** ```DELETE /api/contacts/:id```
- **Example:**
  ```bash
  DELETE http://localhost:3000/api/contacts
  ```



### Project Structure

```
Contact_Management_System/
├── controllers/
│   └── contactController.js
├── routes/
│   └── contactRoutes.js
├── validation/
│   └── contactValidation.js
├── .env
├── contacts.db
├── index.js
├── package-lock.json
├── package.json
└── README.md
```












https://contact-management-system-xjnx.onrender.com/api/contacts


  
