const Task = require("../models/task");

exports.createtask = async(req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}
exports.getTasks = async (req,res)=>{
    try{
        const task = await Task.findAll();
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}
exports.updateTask = async (req,res)=>{
    try{
        const task = await Task.findByPk(req.params.id);
        if(!task) return res.status(404).json({msg:"Task not found"});

        task.completed = req.body.completed;
        await task.save();
        res.json(task);
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.destroy();
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};