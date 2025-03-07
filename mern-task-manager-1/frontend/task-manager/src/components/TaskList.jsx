import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// Displaying all tasks
function TaskList(){
    const [tasks, setTasks] = useState([]);
    const apiURL = import.meta.env.VITE_API_BASE_URL;

    useEffect (()=>{
        fetchTask();
    }, []);

    const fetchTask= async () =>{
        try{
            const response = await axios.get(`${apiURL}`);
            setTasks(response.data);
            console.log(response.data)
        } catch(error){
            console.error('Error fetching tasks:', error);
        }

    }

// Deleting a task
    const handleDelete = async (id) =>{
        try{
            await axios.delete(`${apiURL}/${id}`);
            fetchTask();
        } catch(error){
            console.error('Error deleting task:', error);
        } 
    }

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <ul className="space-y-2">
                {tasks && tasks.map((task) => (
                    <li key={task._id} className="flex items-center justify-between p-2 border rounded">
                        <Link to={`/task/${task._id}`} className="flex-grow mr-2">{task.title}</Link> <br/><br/>
                        <div>
                            <Link to ={`/edit/${task._id}`} className="mr-2 bg-blue-300 hover:bg-blue-100 text-black font-bold py-2 px-2 rounded">Edit</Link>
                            <button onClick={()=>handleDelete(task._id)} className="mr-2 bg-red-400 hover:bg-red-700 text-black font-bold py-1 px-2 rounded">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;