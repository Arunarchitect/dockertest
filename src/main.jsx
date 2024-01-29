import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/Homepage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path:'/',
        element: <Homepage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)

