# Task Manager Application

This is a full-stack task manager application built with React for the frontend and Express.js with MongoDB for the backend.

## Features

* **Task Management:**
    * Create, read, update, and delete tasks.
    * View a list of all tasks.
    * View individual task details.
    * Set due dates for tasks.
* **User Interface:**
    * Clean and responsive UI built with Tailwind CSS.
    * Intuitive forms for task creation and editing.
    * Clear display of task details.
* **Backend API:**
    * RESTful API built with Express.js.
    * MongoDB database for data persistence.
    * Environment variable configuration using `dotenv`.
    * Global error handling.
* **Frontend:**
    * React based frontend.
    * React router used for navigation.
    * Axios used for API calls.
    * State management with React hooks.

## Technologies Used

* **Frontend:**
    * React
    * React Router DOM
    * Axios
    * Tailwind CSS
    * Vite
* **Backend:**
    * Node.js
    * Express.js
    * MongoDB Atlas
    * Mongoose
    * dotenv
    * cors

## Setup

### Backend (Express.js)

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Morphiu/task-manager.git
    cd backend
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` File:**

    Create a `.env` file in the backend directory and add your MongoDB connection URI and port:

    ```
    PORT=5000
    MONGODB_URI= <your mongoDB URI>
    ```

4.  **Run the Server:**

    ```bash
    npm start
    ```

### Frontend (React)

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Morphiu/task-manager.git
    cd frontend/task-manager
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Create `.env` Files:**

    Create `.env` file in the root directory and the URL for your backend.

        ```
        VITE_API_BASE_URL=<localhost URL>
        ```

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```


## Deployment

* **Backend:** Deploy the Express.js backend to a platform like Render.
* **Frontend:** Deploy the React frontend to a platform like Vercel.

## API Endpoints

* `GET api/task`: Retrieve all tasks.
* `GET api/task/:id`: Retrieve a task by ID.
* `POST api/task`: Create a new task.
* `PUT api/task/:id`: Update a task by ID.
* `DELETE api/task/:id`: Delete a task by ID.

## Usage

* Navigate to this link ` https://task-manager-theta-blue.vercel.app/` to interact with the app.

# NOTES

### The frontend is hosted on https://task-manager-theta-blue.vercel.app/
### The backend is hosted on https://task-manager-hqxc.onrender.com/

### The application is still under development. Enhanced features will be introduced later.