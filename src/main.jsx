import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Main/Main'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Teachers from './Pages/Teachers'
import AddTeachers from './Pages/AddTeachers'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>
      },
      {
        path: "/addteachers",
        element: <AddTeachers></AddTeachers>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
