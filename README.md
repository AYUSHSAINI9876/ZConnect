# ZConnect

An end-to-end full‑stack video‑conferencing web application built with modern technologies.

🚀 Features
User authentication: Sign-up, log-in, secure sessions.

Dashboard: Dynamic list of scheduled meetings; create/join meetings.

Real-time audio/video: Uses WebRTC for peer-to-peer communication.

Screen sharing: Share full-screen or specific windows.

Chat: Text messaging during calls.

Responsive design: Works across desktop and mobile browsers.

Backend services:

REST API for user accounts and meeting management.

WebSockets (or similar) for signaling and presence.

JWT-based authentication.

Frontend technologies: React (or Vue/Angular), WebRTC handlers, UI toolkit (Material‑UI/Bootstrap).

Database: PostgreSQL / MongoDB for user data & meeting info.
🛠️ Tech Stack
Layer	Technology
🧑‍💻 Frontend	: React (or your framework), HTML5, CSS, WebRTC
🔧 Backend	: Node.js / Express (or similar) with WebSocket
📦 Database	: MongoDB 
🛡️ Auth	: JWT tokens + bcrypt
📡 Deployment : Render, AWS

⚙️ Getting Started
1. Prerequisites
Node.js v16+

npm or yarn

Docker & Docker Compose (optional)

MongoDB or PostgreSQL (or use the included Docker setup)

2. Clone & Install
bash
Copy
Edit
git clone https://github.com/AYUSHSAINI9876/ZConnect.git
cd ZConnect

# Backend setup
cd backend
npm install

# Frontend setup (in parallel):
cd ../frontend
npm install
3. Configure Environment
Create .env files:

dotenv
Copy
Edit
# backend/.env
PORT=5000
DB_URI=mongodb://localhost:27017/zconnect
JWT_SECRET=your_secret_key
dotenv
Copy
Edit
# frontend/.env
REACT_APP_API_URL=http://localhost:5000/api
4. Run Locally
bash
Copy
Edit
# Start backend
cd backend && npm start

# Start frontend
cd ../frontend && npm start

🚀 Deployment on Render
Render lets you deploy backend, frontend, and database in a few simple steps.

🧩 Folder Structure Assumption
We assume this structure:

go
Copy
Edit
ZConnect/
├── backend/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── package.json
│   └── ...
1️⃣ Backend Deployment (Node.js API)
✅ Steps:
Push your code to GitHub (if not done).

Go to Render Dashboard.

Click "New Web Service".

Connect your GitHub repo.

Select backend/ as the root for the service.

Set:

Environment: Node

Build Command: npm install

Start Command: npm start

Root Directory: backend/

Environment Variables:

PORT=10000 (or your choice)

JWT_SECRET=your_secret_key

MONGO_URI=your_mongodb_connection_string

(any other vars from .env)

Click "Create Web Service".

Render will deploy your backend and give you a public URL like:
https://zconnect-backend.onrender.com

2️⃣ Frontend Deployment (React App)
✅ Steps:
Again, click "New Web Service".

Select the same repo, but now set:

Root Directory: frontend/

Build Command: npm install && npm run build

Start Command: npx serve -s build or serve -s build

Environment Variables:

REACT_APP_API_URL=https://zconnect-backend.onrender.com

Click "Create Web Service".

Render will build and serve your React app from a new URL:
https://zconnect-frontend.onrender.com

3️⃣ Database (MongoDB Atlas Recommended)
If you’re not using Render’s private PostgreSQL, use:

MongoDB Atlas for a free managed MongoDB cluster.

Create a database, get the connection URI, and set it as MONGO_URI in your backend service.
