import React from 'react'
import { useState,useContext } from 'react'
import { TasksContext } from '../context/TasksContext';

const New_task = () => {
  const { addTask }= useContext(TasksContext);
const [inputs,setInputs]=useState({
  title:"",
  description:"",
  deadline:"",
  status:"pending"
});
const [error,setError]=useState("")

const handleChange = (e) => {
  setInputs({ ...inputs, [e.target.name]: e.target.value });
};

const validateForm =()=>{
  const newErrors = {};

  //title validation
  if(!inputs.title || inputs.title.trim()===""){
    newErrors.title="the title is required"
  }else if(!/^[a-zA-Z ]+$/.test(inputs.title)){
    newErrors.title="the title should only contain letters"
  }

  if(!inputs.description || inputs.description.trim()===""){
    newErrors.description="the description is required"
  }else if (!/^[a-zA-Z ]+$/.test(inputs.description)){
    newErrors.description= "the description should only contain letters"
  }

  if(!inputs.deadline || inputs.deadline.trim()===""){
    newErrors.deadline="the deadline is required"
  }

  

 setError (newErrors);
 return Object.keys(newErrors).length ===0;
};
const handleSubmit = (event) => {
  event.preventDefault();
  if (validateForm()) {
    addTask(inputs.title,inputs.description,inputs.deadline,inputs.status);
// clearing the inputs after successful submission
setInputs({
  title:"",
  description:"",
  deadline:"",
  status:"pending"
})

}  
};


  

  
  return (
    <div>
      <h1>New Task</h1>
<form onSubmit={handleSubmit} >
  <label htmlFor="title">Title
<input
 type='text'
 name='title'
 placeholder='title'
 value={inputs.title}
 onChange={handleChange}
 />
{error.title && <p className="text-red-600">{error.title}</p>}

</label>

<label htmlFor="description">Description
  <input type="text"
  placeholder='description'
  onChange={handleChange}
  value={inputs.description}
  name='description'

  />
  {error.description && <p className='text-red-500'>{error.description}</p>}
</label>Deadline
<label htmlFor="deadline">
  <input type="date" 
  name='deadline'
  value={inputs.deadline}
  onChange={handleChange}
  />
{error.deadline && <p className='text-red-600'>{error.deadline}</p>}
</label>

<label htmlFor="status">Status
  <select name="status" id="status"
  value={inputs.status}
  onChange={handleChange}
  >
   <option value="pending">Pending</option> 
   <option value="completed">Completed</option>
   <option value="cancelled">Canceled</option>
  </select>

</label>




<button type='submit'>Submit</button>
</form>


    </div>
  )
}

export default New_task