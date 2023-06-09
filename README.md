# DigitCom-BackEnd

This is a user management system that allows users to create accounts, log in, and log out. It uses a MongoDB database to store user information and provides secure authentication using JWT (JSON Web Tokens).

## Prerequisites

Before running the application, ensure that you have the following dependencies installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```
  https://github.com/Khalil-Bchir/DigitCom.git
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Set up the MongoDB connection by replacing the connection string in the `Server.js` file with your own MongoDB URI.

## Usage

1. Start the server:

   ```
   npm run serve
   ```

2. Access the API endpoints using a tool like Postman or a web browser.

### User Registration

- **Endpoint:** POST `/api/user`
- **Description:** Creates a new user account.
- **Request Body:**

  ```json
  {
    "name": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "userType": "CON",
    "file": [image file]
  }
  ```

- **Response:**

  ```json
  {
    "savedUser": {
      "_id": "60cfd8e682ee1d0015a88a81",
      "name": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "password": "$2a$10$TmuOZ6vugCN1rfeoZTkZ/uuBc55WkNSvMw7a0nGMNGnOV0qJyWXFm",
      "userId": "23001",
      "userType": "CON",
      "file": "1624314807047--profile.jpg",
      "createdAt": "2023-06-21T12:20:38.074Z",
      "updatedAt": "2023-06-21T12:20:38.074Z",
      "__v": 0
    }
  }
  ```

### User Login

- **Endpoint:** POST `/api/logIn`
- **Description:** Logs in a user and generates an access token.
- **Request Body:**

  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

- **Response:**

  ```
  Logged in successfully
  ```

### User Logout

- **Endpoint:** POST `/api/logOut`
- **Description:** Logs out the current user.
- **Response:**

  ```json
  {
    "message": "Logged out"
  }
  ```

## Contributing

Contributions to this user management system are welcome. If you find any issues or have suggestions for improvement, feel free to submit a pull request.
This user management system is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
