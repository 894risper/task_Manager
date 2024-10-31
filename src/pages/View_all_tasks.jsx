import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  

const View_all_tasks = () => {
  const { tasks, deleteTask } = useContext(TasksContext);
  const navigate = useNavigate();  

  return (
    <div className='flex flex-col items-center mt-4 p-6 border border-gray-300 rounded-lg shadow-md w-1/2'>
      {tasks.length > 0 ? (
        <table className='table-auto w-full text-left'>
          <thead>
            <tr>
              <th className='px-4 font-semibold'>Title</th>
              <th className='px-4 font-semibold'>Description</th>
              <th className='px-4 font-semibold'>Deadline</th>
              <th className='px-4 font-semibold'>Status</th>
              <th className='px-4 font-semibold'>Delete</th>
              <th className='px-4 font-semibold'>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className='border-t'>
                <td className="px-4">{task.title}</td>
                <td className="px-4">{task.description}</td>
                <td className="px-4">{task.deadline}</td>
                <td className="px-4">{task.status}</td>
                <td className='px-4'>
                  <button onClick={() => deleteTask(index)}>
                    <FaTrash />
                  </button>
                </td>
                <td className='px-4'>
                  <button onClick={() => navigate('/edit_task', { state: { index } })}>
                    <FaEdit/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks added yet</p>
      )}
      <button 
        onClick={() => navigate('/new_task')} 
        className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'
      >
        Add New Task
      </button>
    </div>
  );
};

export default View_all_tasks;
