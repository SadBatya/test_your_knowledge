import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StartPage, EditTest, Test } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: '/edit',
    element: <EditTest />,
  },
  {
    path: '/test',
    element: <Test />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
