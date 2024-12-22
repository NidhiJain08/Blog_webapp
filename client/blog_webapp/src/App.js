import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import Write from "./pages/Write";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./style.scss";

const Layout=()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<SinglePage/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
]);
const App=()=>{
  return(
    <div className='app'>
      <div className='container'>
      <RouterProvider router={router}/>
      </div>   
    </div>
  );
}

export default App;
