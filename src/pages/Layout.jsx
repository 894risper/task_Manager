import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
       <nav>
        <ul>
            <li>
                <Link to="/">View Tasks</Link>
            </li>
            <li>
                <Link to="/new_task">New task</Link>
            </li>
            <li>
            <Link to="/edit_task">Edit task</Link>
            </li>
        </ul>
        </nav> 
        <Outlet/>
    </div>
  )
}

export default Layout