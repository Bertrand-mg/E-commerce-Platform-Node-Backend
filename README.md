# E-commerce-Platform-Node-Backend
[![Coverage Status](https://coveralls.io/repos/github/Bertrand-mg/E-commerce-Platform-Node-Backend/badge.svg?branch=main)](https://coveralls.io/github/Bertrand-mg/E-commerce-Platform-Node-Backend?branch=main)

## Technologies Used

1. Node.js - Server-side JavaScript runtime environment.

2. Express.js - Web framework for Node.js.

3. PostgreSQL - Relational database management system.

4. Sequelize - ORM for PostgreSQL used for database management.

5. JWT (JSON Web Tokens) - For authentication and authorization.

6. dotenv - For managing environment variables.

7. Nodemon - Development tool for automatically restarting the server on file changes.
   
## How to Setup Project

1. Clone the Repository
Clone this repository to your local machine using Git. Open the terminal and run:
git clone https://github.com/your-username/e-commerce-platform-node-backend.git

Alternatively, you can download the ZIP file and extract it.

2. Install Dependencies

Navigate to the project folder:
cd e-commerce-platform-node-backend

Install the project dependencies using npm:
npm install

This will install all the required dependencies defined in the package.json file.

3. Configure Environment Variables

Create a .env file in the root of the project directory based on the provided template. You can do this by copying the .env.example file to .env:

cp .env.example .env


Edit the .env file to reflect your local environment settings.

4. Set Up the Database

Ensure you have PostgreSQL installed on your machine. Create a database for the application:

CREATE DATABASE e_commerce_platform_backend;

Update your .env file with your PostgreSQL database credentials:

PORT=3000
DB_HOST=127.0.0.1
DB_NAME=e_commerce_platform_backend
DB_USER=your_db_username
DB_PASS=your_db_password
JWT_SECRET=my_super_secret_key_123

5. Run the Application

Start the development server using Nodemon to automatically restart the server on code changes:
npm run dev

The application should now be running on http://localhost:3000

6. Database Migrations
The project uses Sequelize to manage database migrations. If you need to apply migrations to the database (for example, after changing the models), you can run:
npx sequelize-cli db:migrate


This will create or update the necessary database tables as per your models.

