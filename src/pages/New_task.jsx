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
    <div className='flex justify-center items-center h-screen display  flex-col'>
      <h1 className='text-center  text-blue-950 ' >NEW TASK</h1>
<form  onSubmit={handleSubmit}  className='display flex flex-col border border-gray-300 shadow-md  p-4 h- w-96 rounded-lg  '>
  <div></div>
  <label htmlFor="title" className='mb-4 '>Title
<input 
 type='text'
 name='title'
 placeholder='title'
 value={inputs.title}
 onChange={handleChange}
 className='w-full mt-1 px-3 py-2 block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm '
 />
{error.title && <p className="text-red-600">{error.title}</p>}

</label>

<label htmlFor="description" className='mb-4 '>Description
  <input type="text"
  placeholder='description'
  onChange={handleChange}
  value={inputs.description}
  name='description'
className='w-full mt-1 px-3 py-2 block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm '
  />
  {error.description && <p className='text-red-500'>{error.description}</p>}
</label>Deadline
<label htmlFor="deadline" className='mb-4 '>
  <input type="date" 
  name='deadline'
  value={inputs.deadline}
  onChange={handleChange}
  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  
  />
{error.deadline && <p className='text-red-600'>{error.deadline}</p>}
</label>

<label htmlFor="status">Status
  <select name="status" id="status"
  value={inputs.status}
  onChange={handleChange}
  className='w-full mt-1 px-3 py-2 block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm '
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