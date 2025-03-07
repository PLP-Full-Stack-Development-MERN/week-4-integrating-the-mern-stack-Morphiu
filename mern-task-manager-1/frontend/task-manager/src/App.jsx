import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import TaskItem from './components/TaskItem.jsx';


function App(){
    return(
        <Router>
            <div className="container mx-auto p-4">
                <nav className="mb-4">
                    <Link to="/" className="mr-4">Tasks</Link>
                    <Link to="/add" className="mr-4">Add Task</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/add" element={<TaskForm />} />
                    <Route path="/edit/:id" element={<TaskForm />} />
                    <Route path="/task/:id" element={<TaskItem />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;