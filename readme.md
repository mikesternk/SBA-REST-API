# Express User and Grade Management Application

#### By Michael Kimani

This is a simple Express application for managing users and their grades. It provides RESTful endpoints for CRUD operations on users and their grades.

## Installation

1. Clone this repository to your local machine:

> git clone https://github.com/mikesternk/SBA-REST-API

2. Navigate to the project directory:

> cd express-user-management

3. Install dependencies:

> npm install express <br>
> npm install nodemon <br>
> npm install express ejs

## Usage

1. Start the server:

> node app.js

2. Access the application through a web browser or API client.

## Endpoints

### Users

- GET /users: Get all users.
- POST /users: Create a new user.
- GET /users/:id: Get user by ID.
- PUT /users/:id: Update user by ID.
- DELETE /users/:id: Delete user by ID.

### Grades

- `GET /grades`: Get all grades.
- `POST /grades`: Create a new grade.
- `GET /grades/:id`: Get grade by ID.
- `PUT /grades/:id`: Update grade by ID.
- `DELETE /grades/:id`: Delete grade by ID.

## Technologies Used

- Express.js
- Node.js
- EJS (Embedded JavaScript) for views

## Folder Structure

- `routes`: Contains route handlers for different endpoints.
- `data`: Contains mock data for users and grades.
- `views`: Contains EJS templates for rendering views.

## Configuration

- Port: 5000 (Configured in `app.js`)
- Views: EJS (Configured in `app.js`)
- Static Files: public directory (Configured in app.js)

### Additional Notes

- The `/grades` endpoint provides CRUD operations for managing grades.
- You can access grades for all students or for a specific student using the `/grades` and `/grades/:id` endpoints respectively.
