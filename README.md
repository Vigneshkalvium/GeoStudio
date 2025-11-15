# Browser 3D Editor & Analyzer

A lightweight browser-based 3D model editor and analyzer built using **React**, **Three.js / React-Three-Fiber**, and **Python FastAPI**.  
This project demonstrates interactive 3D visualization, geometry operations, mesh analysis, and automated workflows — ideal for CAD, 3D design, and digital manufacturing applications.

---

## 🚀 Features

### 🖥️ Frontend (React + Three.js)
- Upload `.stl` or `.obj` files
- Interactive 3D viewer (orbit, pan, zoom)
- Toggle shading, wireframe, lighting modes
- Raycasting (click to select faces/vertices)
- Boolean operations (union / subtract / intersect)
- Voxel visualization mode
- Clean UI components and toolbars (React + Tailwind CSS)

### ⚙️ Backend (FastAPI + Trimesh / Open3D)
- Mesh analysis  
  - volume  
  - surface area  
  - bounding box  
  - face count  
  - watertight check  
- Voxelization using Open3D/trimesh
- Boolean operations (server-side alternative)
- Mesh repair utilities (remove degenerate faces, fill holes)
- Export cleaned or voxelized meshes

---

## 🧰 Tech Stack

### Frontend
- React + TypeScript
- Vite
- Three.js / React-Three-Fiber
- Tailwind CSS

### Backend
- Python 3.10+
- FastAPI
- Trimesh
- Open3D
- NumPy

### Dev Tools
- GitHub Actions
- Docker (optional)
- Vercel / Netlify (Frontend)
- Render / Railway / Fly.io (Backend)

---

## 📁 Project Structure

browser-3d-editor/
├─ frontend/
│ ├─ src/
│ │ ├─ App.tsx
│ │ ├─ main.tsx
│ │ ├─ components/
│ │ ├─ canvas/
│ │ │ ├─ Viewer.tsx
│ │ │ ├─ SceneManager.ts
│ │ │ └─ GizmoControls.tsx
│ │ ├─ hooks/
│ │ ├─ services/ # API connections to backend
│ │ └─ utils/
│ └─ public/
├─ backend/
│ ├─ app/
│ │ ├─ main.py
│ │ ├─ api/
│ │ │ └─ routes.py
│ │ ├─ services/
│ │ │ ├─ mesh_ops.py
│ │ │ └─ voxelize.py
│ │ └─ utils/
│ ├─ requirements.txt
│ └─ Dockerfile
├─ samples/
└─ README.md

yaml
Copy code

---

## 🛠️ Getting Started

### 📦 Prerequisites
- Node.js 18+
- Python 3.10+
- pip / virtualenv

---

## ▶️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
App runs at:

arduino
Copy code
http://localhost:5173
▶️ Backend Setup
bash
Copy code
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
Backend runs at:

arduino
Copy code
http://localhost:8000
🔌 API Endpoints
POST /api/analyze
Returns:

json
Copy code
{
  "filename": "model.stl",
  "volume": 12.43,
  "surface_area": 45.6,
  "bounds": [[xmin,ymin,zmin],[xmax,ymax,zmax]],
  "is_watertight": true,
  "face_count": 3500
}
POST /api/voxelize
Returns voxel summary + mesh bytes.

POST /api/boolean
Supports:

union

difference

intersect# Browser 3D Editor & Analyzer

A lightweight browser-based 3D model editor and analyzer built using **React**, **Three.js / React-Three-Fiber**, and **Python FastAPI**.  
This project demonstrates interactive 3D visualization, geometry operations, mesh analysis, and automated workflows — ideal for CAD, 3D design, and digital manufacturing applications.

---

## 🚀 Features

### 🖥️ Frontend (React + Three.js)
- Upload `.stl` or `.obj` files
- Interactive 3D viewer (orbit, pan, zoom)
- Toggle shading, wireframe, lighting modes
- Raycasting (click to select faces/vertices)
- Boolean operations (union / subtract / intersect)
- Voxel visualization mode
- Clean UI components and toolbars (React + Tailwind CSS)

### ⚙️ Backend (FastAPI + Trimesh / Open3D)
- Mesh analysis  
  - volume  
  - surface area  
  - bounding box  
  - face count  
  - watertight check  
- Voxelization using Open3D/trimesh
- Boolean operations (server-side alternative)
- Mesh repair utilities (remove degenerate faces, fill holes)
- Export cleaned or voxelized meshes

---

## 🧰 Tech Stack

### Frontend
- React + TypeScript
- Vite
- Three.js / React-Three-Fiber
- Tailwind CSS

### Backend
- Python 3.10+
- FastAPI
- Trimesh
- Open3D
- NumPy

### Dev Tools
- GitHub Actions
- Docker (optional)
- Vercel / Netlify (Frontend)
- Render / Railway / Fly.io (Backend)

---

## 📁 Project Structure

browser-3d-editor/
├─ frontend/
│ ├─ src/
│ │ ├─ App.tsx
│ │ ├─ main.tsx
│ │ ├─ components/
│ │ ├─ canvas/
│ │ │ ├─ Viewer.tsx
│ │ │ ├─ SceneManager.ts
│ │ │ └─ GizmoControls.tsx
│ │ ├─ hooks/
│ │ ├─ services/ # API connections to backend
│ │ └─ utils/
│ └─ public/
├─ backend/
│ ├─ app/
│ │ ├─ main.py
│ │ ├─ api/
│ │ │ └─ routes.py
│ │ ├─ services/
│ │ │ ├─ mesh_ops.py
│ │ │ └─ voxelize.py
│ │ └─ utils/
│ ├─ requirements.txt
│ └─ Dockerfile
├─ samples/
└─ README.md

yaml
Copy code

---

## 🛠️ Getting Started

### 📦 Prerequisites
- Node.js 18+
- Python 3.10+
- pip / virtualenv

---

## ▶️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
App runs at:

arduino
Copy code
http://localhost:5173
▶️ Backend Setup
bash
Copy code
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
Backend runs at:

arduino
Copy code
http://localhost:8000
🔌 API Endpoints
POST /api/analyze
Returns:

json
Copy code
{
  "filename": "model.stl",
  "volume": 12.43,
  "surface_area": 45.6,
  "bounds": [[xmin,ymin,zmin],[xmax,ymax,zmax]],
  "is_watertight": true,
  "face_count": 3500
}
POST /api/voxelize
Returns voxel summary + mesh bytes.

POST /api/boolean
Supports:

union

difference

intersect