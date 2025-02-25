# TaskPulse - Task Management Application

TaskPulse is a powerful task management application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into **To-Do, In Progress,** and **Done**, ensuring an organized workflow. All changes are saved instantly to the database for real-time synchronization.

## 🚀 Features

### 1. Authentication
- Only authenticated users can access the app.
- Firebase Authentication (Google sign-in).
- User details (User ID, email, display name) are stored in the database upon first login.

### 2. Task Management System
- Add, edit, delete, and reorder tasks.
- Tasks belong to one of three categories:
  - **To-Do**
  - **In Progress**
  - **Done**
- Drag-and-drop tasks between categories.
- Reorder tasks within a category.
- Instant database updates for persistence.
- Each task contains:
  - **Title** (required, max 50 characters)
  - **Description** (optional, max 200 characters)
  - **Timestamp** (auto-generated upon creation)
  - **Category** (To-Do, In Progress, Done)

### 3. Database & Persistence
- Uses **MongoDB** (via **Express.js** server) for task storage.
- Real-time updates ensure tasks remain in their last known order.
- Deleted tasks are permanently removed from the database.
- Real-time synchronization using one of the following:
  - **MongoDB Change Streams**
  - **WebSockets**
  - **Optimistic UI Updates**
  - **Polling (as a fallback)**

### 4. Frontend UI
- Built with **Vite.js + React**.
- Uses a drag-and-drop library (**react-beautiful-dnd** or similar).
- Modern, clean, and responsive UI with a maximum of four colors.

### 5. Responsiveness
- Fully functional on both **desktop** and **mobile**.
- Mobile-friendly drag-and-drop experience.

### 6. Backend
- **Express.js API** for CRUD operations.
- **MongoDB** database for task storage.
- API Endpoints:
  - `POST /tasks` – Add a new task.
  - `GET /tasks` – Retrieve all tasks for the logged-in user.
  - `PUT /tasks/:id` – Update task details (title, description, category).
  - `DELETE /tasks/:id` – Delete a task.

## 🌟 Bonus Features (Optional but Recommended)
- **Dark Mode Toggle** 🌙
- **Task Due Dates** with color indicators (e.g., overdue tasks appear red).
- **Activity Log** to track changes (e.g., "Task moved to Done").

## 🛠️ Tech Stack
- **Frontend**: Vite.js, React, Firebase Authentication
- **Backend**: Express.js, MongoDB
- **Libraries**: react-beautiful-dnd (or alternative for drag-and-drop), Axios

## 📦 Installation & Setup
### 1. Clone the repository
```sh
git clone https://github.com/your-username/taskpulse.git
cd taskpulse
```

### 2. Install dependencies
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 3. Set up environment variables
Create a `.env` file in the server directory with the following variables:
```env
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
```

### 4. Run the application
#### Start the backend server
```sh
cd server
npm start
```
#### Start the frontend
```sh
cd client
npm run dev
```

## 📌 Contributing
Contributions are welcome! Feel free to fork this repository, open an issue, or submit a pull request.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
🚀 **TaskPulse - Organize Your Work, Stay Productive!**