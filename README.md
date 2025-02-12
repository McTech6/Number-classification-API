Task1

Description

This is a simple Express.js project that sets up a basic server with middleware for parsing JSON request bodies.

Features

Express.js server

Middleware for JSON parsing

Routing setup

Nodemon for automatic server restarts during development
Installation

Prerequisites

Ensure you have Node.js installed on your machine.

Steps

Clone the repository:

git clone  https://github.com/McTech6/Number-classification-API.git

Navigate to the project directory:

cd task1

Install dependencies:

npm install

Usage

Start the Server

To start the server, run:

npm start

The server will run on http://localhost:3000.

Project Structure

/task1
│── middleware/
│   ├── route.js       # Routes handling
│── server.js         # Main entry point
│── package.json      # Project metadata and dependencies
│── README.md         # Project documentation

API Endpoints

GET /api/classify-number?number=xxx

Description: Classifies the number based on its properties (prime, perfect, Armstrong, etc.).

Query Parameters:

number: The number to be classified.

Example Request:

curl "http://localhost:3000/api/classify-number?number=371"

Example Response:

{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}

License

This project is licensed under the ISC License.

Author

Tidding Ramsey