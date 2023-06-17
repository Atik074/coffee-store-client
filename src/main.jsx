import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import AddCoffea from './Components/AddCoffea.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader : () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addcoffe",
    element:<AddCoffea></AddCoffea>,
  },
  {
    path: "/updateCoffe/:id",
    element:<UpdateCoffe></UpdateCoffe>,
    loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);