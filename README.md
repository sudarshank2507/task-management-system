Task Mangemment System

A full-stack task management system built with FastAPI and React. This application enables users to create, update, and delete tasks, manage their daily activities, and collaborate efficiently.

Features
User Authentication:
Secure registration and login functionality using JWT tokens.

Task Management:
Create, read, update, and delete tasks with fields like title, description, status, and priority.

Real-Time Updates:
Interactive UI built with React, offering a responsive, dynamic experience.

Modern UI:
Styled with Bootstrap for a clean, professional look.

API Documentation:
FastAPI provides interactive API docs at /docs for easy testing and integration.

Tech Stack
Backend:

FastAPI
SQLAlchemy
Uvicorn
JWT for authentication
Frontend:

React
Bootstrap
Axios for API calls
Database:

SQLite (for development) or PostgreSQL/MySQL for production
Installation & Running Locally
Backend Setup:

Create and activate your virtual environment.
Install dependencies:
bash
Copy
Edit
pip install fastapi uvicorn sqlalchemy python-dotenv passlib[bcrypt] pyjwt
Configure your .env file with necessary environment variables.
Run the FastAPI server:
bash
Copy
Edit
uvicorn main:app --reload
Access API docs at http://127.0.0.1:8000/docs.
Frontend Setup:

Navigate to the frontend directory.
Install dependencies:
bash
Copy
Edit
npm install
Start the React development server:
bash
Copy
Edit
npm start
Your React app will be available at http://localhost:3000.
Deployment
Backend:
Deployed on Railway for a scalable API server.

Frontend:
Deployed on Vercel, ensuring fast and reliable hosting for the React application.

Contributing
Feel free to fork the repository, submit pull requests, or raise issues. Your contributions are welcome!
