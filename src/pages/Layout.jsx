import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Layout = () => {
  return (

    <div className=''>
       <nav>
        <ul className='display flex flex-row fle space-x-96 bg-blue-400 h-8 justify-center'>
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