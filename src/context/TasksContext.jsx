import React,{createContext,useState} from "react";



const TasksContext = createContext();

const TaskProvider=({children})=>{
  const[tasks,setTasks] = useState([]);

  const addTask=(title,description,deadline,status)=>{
    setTasks((prevTasks)=>[...prevTasks,{title,description,deadline,status}])
  };
  const deleteTask =(index)=>{
    setTasks((prevTasks)=> prevTasks.filter((_,i)=>i !==index))
  }
  const editTask = (index, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? updatedTask : task))
    );
  };
 
  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask ,editTask}}>
        {children}
    </TasksContext.Provider>
);

};

export { TasksContext, TaskProvider };
