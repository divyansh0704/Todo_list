import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import "./App.css"

function App(){
  const [tasks,setTasks] = useState([]);
  const [title,setTitle] = useState("");

  const fetchTasks = async()=>{
    try {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data.task);
  } catch (err) {
    console.error("Fetch error:", err);
    setTasks([]);
  }
  }
  const addTasks = async()=>{
    if(!title.trim()) return;
    await axios.post("http://localhost:5000/tasks",{title,completed:false});
    setTitle("");
    fetchTasks();
  }
   const toggleTask = async (id, completed) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };
   const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return(
    <div className="app">
      <h1>Todo List</h1>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter task" />
      <button onClick={addTasks}>add task</button>
      <ul>
        {Array.isArray(tasks) && tasks.map((task)=>(
          <li key={task.id}>
            <span onClick={()=>toggleTask(task.id,task.completed)}
            className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            <button onClick={()=>deleteTask(task.id)} style={{marginLeft:"10px"}}>del</button>
            </li>
        ))}
      </ul>
    </div>

  )
}

export default App;
