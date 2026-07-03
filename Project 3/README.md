# Student CRUD API

A simple RESTful API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** that performs CRUD (Create, Read, Update, Delete) operations on student records.

---

## 🚀 Features

- Create a new student
- Get all students
- Get a student by ID
- Update student details
- Delete a student
- MongoDB database integration
- Environment variable configuration
- Input validation
- Error handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- Nodemon

---

## 📁 Project Structure

```text
student-crud-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

### 2. Navigate to the project directory

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
```

> If you're using MongoDB Atlas, replace the `MONGO_URI` with your MongoDB Atlas connection string.

### 5. Start the development server

```bash
npm run dev
```

Or run in production mode:

```bash
npm start
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a student by ID |
| POST | `/api/students` | Create a new student |
| PUT | `/api/students/:id` | Update an existing student |
| DELETE | `/api/students/:id` | Delete a student |

---

## 📝 Sample Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20,
  "course": "Full Stack Development"
}
```

---

## 📦 Dependencies

- Express
- Mongoose
- Dotenv
- Nodemon

---

## 🧪 Testing

You can test the API using:

- Postman
- Thunder Client (VS Code)

---

## 📚 Learning Outcomes

This project demonstrates:

- MongoDB database integration
- Mongoose schema design
- RESTful API development
- CRUD operations
- Express routing
- Environment variable management
- Error handling and validation
