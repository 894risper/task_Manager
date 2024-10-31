import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-gray-800 text-white p-4 flex-shrink-0">
        <ul className="space-y-4">
          <li><Link to="/">View Tasks</Link></li>
          <li><Link to="/new_task">New Task</Link></li>
          <li><Link to="/edit_task">Edit Task</Link></li>
        </ul>
      </nav>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
