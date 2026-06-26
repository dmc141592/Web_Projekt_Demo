# Creative Web Studio

A modern full-stack web application built with React, Express, and PostgreSQL.

This project demonstrates the development of a modern web application featuring a responsive user interface, a contact form connected to a backend API, and a PostgreSQL database for storing contact requests.

---

## Technologies

### Frontend

* React
* Vite
* JavaScript (ES6+)
* CSS3

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

---

## Features

* Modern landing page
* Responsive design
* Hero section
* Services overview
* Project filtering
* FAQ section
* Contact form
* REST API
* PostgreSQL data storage
* Component-based React architecture

---

## Project Structure

```text
WebProjektDemo/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── FAQ.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── database.sql
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Prerequisites

Make sure the following software is installed:

* Node.js 
* npm
* PostgreSQL
* pgAdmin 4

---

## Database Setup

### Create Database

```sql
CREATE DATABASE web_demo;
```

### Create Table

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Environment Variables

Create the following file:

```text
backend/.env
```

Add the following content:

```env
PORT=3000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=web_demo
DB_PASSWORD=YOUR_PASSWORD
DB_PORT=5432
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd WebProjektDemo
```

---

### Install Backend Dependencies

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm start
```

The API will be available at:

```text
http://localhost:3000
```

---

### Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

Start the React development server:

```bash
npm run dev
```

Vite will usually run at:

```text
http://localhost:5173
```

---

## API Endpoints

### Create Contact Message

```http
POST /api/contact
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello World"
}
```

Response:

```json
{
  "success": true
}
```

---

### Get All Messages

```http
GET /api/messages
```

Response:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello World",
    "created_at": "2025-01-01T12:00:00.000Z"
  }
]
```

---

## React Components

### Navbar

Provides navigation between website sections.

### Hero

Landing section featuring the main headline and call-to-action button.

### Services

Displays the services offered.

### Projects

Project showcase with category filtering.

### FAQ

Interactive frequently asked questions section.

### Contact

Contact form connected to the backend and PostgreSQL database.

---

## Development

Start Backend:

```bash
cd backend
npm start
```

Start Frontend:

```bash
cd frontend
npm run dev
```

---

## Future Improvements

* User authentication
* JWT-based authorization
* Admin dashboard
* Dark mode
* Email notifications
* File uploads
* Docker support
* Cloud deployment
* CI/CD pipeline

---

## Learning Goals

This project was built to practice and demonstrate:

* React fundamentals
* Component-based architecture
* REST API development with Express
* PostgreSQL integration
* Full-stack application development
* Modern frontend design principles

---

## License

This project was created for educational and portfolio purposes.


