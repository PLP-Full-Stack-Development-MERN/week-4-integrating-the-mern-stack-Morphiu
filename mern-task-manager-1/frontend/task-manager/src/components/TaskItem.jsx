import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

//Fetching task
function TaskItem(){
    const [task, setTask] = useState(null);
    const {id} = useParams();
    const apiURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(()=>{
        fetchTask();
    }, [id]);

    const fetchTask = async () => {
        try{
            const response = await axios.get(`${apiURL}/${id}`);
            setTask(response.data);
        } catch(error){
            console.error("Error fetching Task:", error);
        }
    }

    if (!task) return <div>Loading...</div>

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.dueDate ? task.dueDate.slice(0, 10) : 'N/A'}</p>
        </div>
    );
}

export default TaskItem