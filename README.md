# Smart Task Manager

A Full Stack MERN Task Management Application that helps users manage daily tasks efficiently. Users can register, login, create tasks, update tasks, mark tasks as completed, search tasks, filter tasks, and delete tasks.

---

## Live Demo

### Frontend (Vercel)
https://task-manager-app-lime-delta.vercel.app

### Backend (Render)
https://task-manager-app-hahg.onrender.com

---

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Dashboard Route
- Logout Functionality

### Task Management
- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed
- Task Priority Management (Low, Medium, High)

### Search & Filter
- Search Tasks by Title
- Filter Tasks:
  - All
  - Pending
  - Completed

### Dashboard
- Total Tasks Counter
- Completed Tasks Counter
- Pending Tasks Counter
- Responsive UI

### Database
- MongoDB Atlas Integration
- Persistent Data Storage

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```text
TASK-MANAGER-APP
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=5000
```

---

## Run Backend

```bash
cd server
npm start
```

---

## Run Frontend

```bash
cd client
npm run dev
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Tasks

#### Get All Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

#### Update Task

```http
PUT /api/tasks/edit/:id
```

#### Complete Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

---

## Future Improvements

- User Specific Tasks
- Dark Mode
- Task Categories
- Due Dates & Reminders
- Drag and Drop Task Board

---

## Author

**Namita Kumari**

Full Stack MERN Developer

---

## License

This project is developed for learning and portfolio purposes.