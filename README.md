🍜🐼 Hungry Panda 
======================================

Empowering startups to learn, build, fund, and grow.  
Hungry Panda is a full-stack platform that connects entrepreneurs with resources, startup profiles, and growth tools.


🧩 Project Overview
-------------------
Layer        | Tech Stack               | Description
-------------|--------------------------|-----------------------------------------
Frontend     | React (Vite + React Router v6) | User-facing web app with dynamic routes and clean UI.
Backend      | FastAPI (Python 3.10+)   | REST API that powers authentication, profiles, and resource endpoints.
Database     | Supabase (PostgreSQL)*   | Planned for future use (data storage, auth, file management).


## 🗂️ Folder Structure

📁 hungry-panda/  
├── 📁 frontend/                 # React app (Vite)  
│   ├── 📁 src/  
│   ├── 📁 public/  
│   ├── 📄 package.json  
│   └── 📄 vite.config.js  
│  
├── 📁 backend/                  # FastAPI app  
│   ├── 📁 app/  
│   │   └── 📄 main.py  
│   ├── 📄 requirements.txt  
│   └── 📄 .gitignore  
│  
└── 📄 README.txt


⚙️ Getting Started
------------------

🧠 Prerequisites
----------------
Make sure you have these installed:
- Node.js v18+ and npm
- Python 3.10+
- Git
- Tawilwind 3 only !!!


🚀 Running the Project
----------------------

1️⃣ Clone the Repository
------------------------
```
git clone https://github.com/<your-username>/hungry-panda.git
cd hungry-panda
```

2️⃣ Start the Backend (FastAPI)
-------------------------------
```
cd backend
python -m venv venv
venv\Scripts\activate        # On Windows
# source venv/bin/activate   # On Mac/Linux
```

pip install fastapi uvicorn
uvicorn app.main:app --reload

✅ Once it runs, open: http://127.0.0.1:8000
You should see:
{"message": "Entrepreneurship Hub API running successfully 🚀"}

API Docs:
- Swagger UI → http://127.0.0.1:8000/docs
- ReDoc → http://127.0.0.1:8000/redoc


3️⃣ Start the Frontend (React + Vite)
-------------------------------------
Open a new terminal (keep backend running):
```
cd frontend
npm install
npm run dev
```

✅ Once it runs, open: http://localhost:5173


🌐 Connecting Frontend and Backend
----------------------------------
When you begin integrating:
- The frontend will call the API at http://127.0.0.1:8000
- Add CORS middleware in FastAPI to allow requests from http://localhost:5173

**Example:**

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```




🧪 Development Workflow
-----------------------
Action                         | Command
-------------------------------|------------------------------------------
Run FastAPI                    | uvicorn app.main:app --reload
Run React                      | npm run dev
Freeze backend dependencies     | pip freeze > requirements.txt
Add new Python package          | pip install <package>
Add new Node package            | npm install <package>


👥 Team Guidelines
------------------
- Commit changes frequently with clear messages.
- Keep frontend and backend changes in separate commits when possible.
- Always test both servers locally before pushing.
- If you add new environment variables, document them in `.env.example`.


💡 Next Steps
-------------
- [ ] Add frontend routes: Home, Login, Signup, Dashboard, Profile, Resources.
- [ ] Implement authentication (Supabase OAuth).
- [ ] Connect API endpoints to database.
- [ ] Deploy to production (Vercel + Railway / Render).


🧑‍💻 Contributors
-----------------
| Name             | Role                          |
|------------------|-------------------------------|
| Mitheel Ramdaw   |Project Co/Lead /  Backend Development / DevOps   |
| Ryan Chitate     |Project Co/Lead /  Backend Development / DevOps   |
| Mikhaar Ramdaw   | Full Stack Development         |
| Mohammad Malik   | Full Stack Development         |
| Lionel Muke      | Frontend Development           |


