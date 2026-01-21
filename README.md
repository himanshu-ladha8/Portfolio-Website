# Personal Portfolio Website

A modern, responsive personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 📧 Contact form with backend integration
- 🎯 Smooth scrolling navigation
- 🌈 Gradient animations and transitions
- 💼 Experience showcase
- 🚀 Project portfolio section
- 🔗 Social media links

## Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Modern CSS animations

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

Or if using MongoDB Atlas:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### 2. Frontend Setup

```bash
cd ../frontend/app1
npm install
```

Install Tailwind CSS dependencies (if not already installed):

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system. If using MongoDB Atlas, ensure your connection string is correct.

### Start Backend Server

```bash
cd backend
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd frontend/app1
npm start
```

The frontend will run on `http://localhost:3000`

## Project Structure

```
PersonalPortfolioWebsite/
├── backend/
│   ├── server.js          # Express server setup
│   ├── package.json
│   └── .env               # Environment variables
├── frontend/
│   └── app1/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.js
│       │   │   ├── Hero.js
│       │   │   ├── About.js
│       │   │   ├── Skills.js
│       │   │   ├── Projects.js
│       │   │   ├── Contact.js
│       │   │   ├── Footer.js
│       │   │   └── CustomCursor.js
│       │   ├── App.js
│       │   ├── index.js
│       │   └── index.css
│       ├── public/
│       └── package.json
└── README.md
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `frontend/app1/src/components/Hero.js`
   - Change name, title, and description

2. **About Section**: Edit `frontend/app1/src/components/About.js`
   - Update bio and add your photo to `frontend/app1/public/profile-photo.jpg`

3. **Experience**: Edit `frontend/app1/src/components/Skills.js`
   - Update your experience categories (Backend, Frontend, Design)

4. **Projects**: Edit `frontend/app1/src/components/Projects.js`
   - Add your own projects with images, descriptions, and links

5. **Contact**: Edit `frontend/app1/src/components/Contact.js`
   - Update email, phone, and social media links

6. **Footer**: Edit `frontend/app1/src/components/Footer.js`
   - Update social media links and footer content

### Styling

The project uses Tailwind CSS. You can customize colors and styles in:
- `frontend/app1/tailwind.config.js` - Tailwind configuration
- `frontend/app1/src/index.css` - Global styles and custom utilities

## API Endpoints

### POST /api/contact
Submit contact form message

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon."
}
```

### GET /api/health
Check server health status

### GET /api/messages
Get all contact messages (for admin purposes)

## License

This project is open source and available under the MIT License.

