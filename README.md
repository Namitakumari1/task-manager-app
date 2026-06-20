# Smart Task Manager

A full-stack MERN Task Management Application that allows users to create, update, complete, search, filter, and delete tasks.

## Features

- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed
- Search Tasks
- Filter Tasks (All / Pending / Completed)
- Task Priority Management
- Responsive Dashboard
- MongoDB Atlas Integration

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

## Project Structure

```text
TASK-MANAGER-APP
│
├── client
│   ├── src
│   └── public
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   └── config
│
└── README.md
```

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

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
cd ../client
npm run dev
```

## Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Future Improvements

- JWT Authentication
- User Profiles
- Dark Mode
- Notifications

## Author

Namita Kumari