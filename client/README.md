## LeadFlow CRM – Client Lead Management System

A full-stack **Mini CRM (Customer Relationship Management)** application built using the MERN stack.
This system helps businesses, freelancers, and agencies manage incoming leads, track follow-ups, and monitor conversions through a secure admin dashboard.

---

##  Features

###  Authentication

* Admin login with JWT authentication
* Secure protected routes

###  Dashboard

* Total leads overview
* Lead status breakdown (New, Contacted, Converted, Lost)
* Conversion rate tracking
* Visual analytics (charts)

### Lead Management

* Add new leads
* View all leads in a structured UI
* Update lead status
* Delete unwanted leads

### Search & Filters

* Search leads by name, email, or company
* Filter leads based on status

### Follow-up Notes

* Add notes for each lead
* Track communication history with timestamps

---

## Tech Stack

### Frontend

* React.js (Vite)
* CSS (custom styling)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### Authentication

* JWT (JSON Web Token)
* bcrypt (password hashing)

---

## Project Structure

```
leadflow-crm/
│
├── client/        # React frontend
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── services/
│
├── server/        # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
└── README.md
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/leadflow-crm.git
cd leadflow-crm
```

---

### Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

### Leads

```
GET    /api/leads
POST   /api/leads
PUT    /api/leads/:id
DELETE /api/leads/:id
POST   /api/leads/:id/notes
```

---

## Screenshots

(Add your screenshots here after deployment)

* Dashboard
* Leads Page
* Add Lead Form

---

## Deployment

Frontend: Vercel
Backend: Render

---

## Real-World Use Case

This CRM system can be used by:

* Freelancers to manage client inquiries
* Agencies to track sales leads
* Startups to monitor customer conversions

---

## Future Improvements

* Pagination for large datasets
* Export leads to CSV
* Email notifications for follow-ups
* Role-based access (multi-user CRM)

---

## Author

**Nandini Kuncham**
B.Tech CSE Student | Aspiring Software Developer

---

##If you like this project

Give it a on GitHub and share your feedback!
