import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// Adding or updating tasks

function TaskForm(){
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [task, setTask] = useState({title:'', description:'', status:'pending', dueDate:'' });
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect (()=>{
        if(id){
            fetchTask();
        }
    }, [id]);

    const fetchTask = async () =>{
        try{
            const response = await axios.get(`${apiURL}/${id}`);
            setTask(response.data);
        } catch (error){
            console.error("Error fetching task: ", error);
        }
    }

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(id){
                await axios.put(`${apiURL}/${id}`, task);
            }else{
                await axios.post(`${apiURL}`, task);
            }
            navigate(`/`);
        } catch(error){
            console.error('Error saving task: ', error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Task': 'Add Task'}</h2>
            <div>
                <label className="block">Title:</label>
                <input type="text" name="title" value={task.title} onChange={handleChange} className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block">Description:</label>
                <textarea name="description" value={task.description} onChange={handleChange} className="w-full border rounded p-2"></textarea>
            </div>
            <div>
                <label className="block">Status:</label>
                <select name="status" value={task.status} onChange={handleChange} className="w-full border rounded p-2">
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label className="block">Due Date:</label>
                <input type="date" name="dueDate" value={task.dueDate ? task.dueDate.slice(0,10): ''} onChange={handleChange} className="w-full border rounded p-2" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">{id ? 'Update' : 'Save'}</button>
        </form>
    )
}

export default TaskForm;