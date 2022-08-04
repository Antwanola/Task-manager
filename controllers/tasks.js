const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')


const getAllTask = asyncWrapper( async (req, res)=>{
   
    const tasks = await Task.find({})
    res.status(201).json({tasks})
  
});
const createTasks = asyncWrapper( async (req, res)=>{
   
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
   
});
const getTask = asyncWrapper( async (req, res, next)=>{
    
        const {id:TaskId} = req.params
        const task  = await Task.findOne({_id:TaskId});
        if(!task){
            return next(createCustomError(`No Content for task id ${TaskId}`, 404))
          
        }
        res.status(200).json(task)
   
    });

const updateTask = asyncWrapper( async (req, res)=>{

    const {id:TaskId} = req.params;
    const {name, completed} = req.body
    const task = await Task.findOneAndUpdate({_id:TaskId},req.body, {new:true, runValidators:true})
    if(!task) return next(createCustomError(`No Content for task id ${TaskId}`, 404))
    res.status(200).json(task)
  
});
const deleteTask = asyncWrapper( async (req, res)=>{
  
        const {id:TaskId} = req.params;
        const task = await Task.findOneAndDelete({_id:TaskId});
        if(!task) return next(createCustomError(`No Content for task id ${TaskId}`, 404))
        res.status(200).json({status:`200 Ok`})        
   
});


module.exports = {
    getAllTask,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}
