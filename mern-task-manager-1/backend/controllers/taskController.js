const Task = require('../models/Task');


// Retrieving tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch(err){
        res.status(500).json({message: err.message});
    };
}

// Retrieving task by id
const getTasksById = async (req, res)=>{
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch(err){
        res.status(404).json({message: err.message})
    }
}


// Creating a task 
const createTask = async (req,res)=>{
    try{
        const {title, description, status, dueDate} = req.body;
        const task = new Task({title, description, status, dueDate});
        await task.save();
        res.status(201).json(Task);
    } catch(err){
        res.status(400).json({message: err.message});
    }
}

// Updating task by id
const updateTask = async (req, res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!task){
            return res.status(404).json({message: 'Oops, task not found.'});
        }
        res.json(task);
    } catch(err){
        next(err);
    }
}

// Deleting task by id
const deleteTask = async (req, res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({message: 'The Task to be deleted was not found.'});
        }
        res.status(204).send();
        }catch(err){
            next(err);
        }
}
module.exports = {getTasks, getTasksById, createTask, updateTask, deleteTask};