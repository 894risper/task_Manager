import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TasksContext } from '../context/TasksContext';

const Edit_task = () => {
  const { tasks, addTask, deleteTask } = useContext(TasksContext);
  const navigate = useNavigate();
  const location = useLocation();
  const taskIndex = location.state.index; // Get the index from the state
  const task = tasks[taskIndex]; // Get the task based on the index
  const [inputs, setInputs] = useState(task);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the task
    deleteTask(taskIndex); // Remove the old task
    addTask(inputs.title, inputs.description, inputs.deadline, inputs.status); // Add the updated task
    navigate('/'); // Redirect to the view all tasks page
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title
          <input
            type='text'
            name='title'
            value={inputs.title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">Description
          <input
            type='text'
            name='description'
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="deadline">Deadline
          <input
            type='date'
            name='deadline'
            value={inputs.deadline}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="status">Status
          <select name="status" value={inputs.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Canceled</option>
          </select>
        </label>

        <button type='submit'>Update Task</button>
      </form>
    </div>
  );
};

export default Edit_task;
