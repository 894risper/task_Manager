import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TasksContext } from '../context/TasksContext';

const Edit_task = () => {
  const { tasks, editTask } = useContext(TasksContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { index } = location.state || {};

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    status: ''
  });
  const [error, setError] = useState({});

  useEffect(() => {
    if (index !== undefined && tasks[index]) {
      const taskToEdit = tasks[index];
      setFormData(taskToEdit);
    }
  }, [index, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title || formData.title.trim() === '') {
      newErrors.title = 'The title is required';
    } else if (!/^[a-zA-Z ]+$/.test(formData.title)) {
      newErrors.title = 'The title should only contain letters';
    }

    // Description validation
    if (!formData.description || formData.description.trim() === '') {
      newErrors.description = 'The description is required';
    } else if (!/^[a-zA-Z ]+$/.test(formData.description)) {
      newErrors.description = 'The description should only contain letters';
    }

    // Deadline validation
    if (!formData.deadline) {
      newErrors.deadline = 'The deadline is required';
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      editTask(index, formData); // Update the task
      navigate('/'); // Navigate to the index route
    }
  };

  return (
    <div className='flex justify-center mt-4 p-6 border border-gray-300 rounded-lg shadow-md w-full'>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <h2 className='text-xl mb-4'>Edit Task</h2>
        <div className='mb-4'>
          <label className='block text-sm font-semibold'>Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
          />
          {error.title && <p className='text-red-600'>{error.title}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold'>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
          />
          {error.description && <p className='text-red-600'>{error.description}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold'>Deadline</label>
          <input
            type='date'
            name='deadline'
            value={formData.deadline}
            onChange={handleChange}
            required
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
          />
          {error.deadline && <p className='text-red-600'>{error.deadline}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold'>Status</label>
          <select
            name='status'
            value={formData.status}
            onChange={handleChange}
            required
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
          >
            <option value=''>Select Status</option>
            <option value='Pending'>Pending</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit_task;
