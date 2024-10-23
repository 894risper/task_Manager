import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const View_all_tasks = () => {
  const { tasks, deleteTask } = useContext(TasksContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.description} - {task.deadline} - {task.status}
            <button onClick={() => deleteTask(index)}>
              <FaTrash /> Delete
            </button>
            <button onClick={() => navigate('/edit_task', { state: { index } })}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View_all_tasks;
