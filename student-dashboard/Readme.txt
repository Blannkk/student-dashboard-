Student Dashboard Full-Stack Application
This is a full-stack application for managing student quizzes and announcements. The application consists of a React frontend and an Express.js backend.
Project Structure
student-dashboard
 ┣ 📂 frontend (React + TypeScript)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📂 i18n
 ┃ ┃ ┗ 📂 hooks
 ┃ ┗ 📜 package.json
 ┣ 📂 backend (Express + TypeScript)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 config
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 interfaces
 ┃ ┃ ┣ 📂 middlewares
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📂 validators
 ┃ ┗ 📜 package.json
Getting Started
Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file:

envCopyMONGODB_URI=your_mongodb_uri
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

Start the development server:

npm run dev
Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Create a .env file:

envCopyREACT_APP_API_URL=http://localhost:5000/api

Start the development server:

npm start
API Endpoints
Authentication

POST /api/auth/login: Login user
POST /api/auth/logout: Logout user
GET /api/auth/check: Check authentication status

Quizzes

GET /api/quizzes: Get all quizzes
GET /api/quizzes/:id: Get quiz by ID
POST /api/quizzes: Create new quiz
PUT /api/quizzes/:id: Update quiz
DELETE /api/quizzes/:id: Delete quiz

Announcements

GET /api/announcements: Get all announcements
GET /api/announcements/:id: Get announcement by ID
POST /api/announcements: Create new announcement
PUT /api/announcements/:id: Update announcement
DELETE /api/announcements/:id: Delete announcement

Features

User authentication
Quiz management
Announcement management
Internationalization support
Material UI components
Redux state management
TypeScript integration
MongoDB database
Express.js backend
Clean architecture
Error handling
Input validation