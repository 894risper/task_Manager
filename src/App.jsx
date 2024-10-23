import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import View_all_tasks from './pages/View_all_tasks'
import Nopage from './pages/Nopage'
import Layout from './pages/Layout'
import New_task from './pages/New_task'
import Edit_task from './pages/Edit_task'
import { TaskProvider } from './context/TasksContext'

function App() {
  return (
    <div className='display flex flex-col'>
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<View_all_tasks />} />
            <Route path="new_task" element={<New_task />} />
            <Route path="edit_task" element={<Edit_task />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
    </div>
  )
}

export default App
