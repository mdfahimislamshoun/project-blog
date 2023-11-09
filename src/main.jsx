import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './component/AuthProvider&privet/AuthProvider.jsx'
import Privet from './component/AuthProvider&privet/Privet.jsx'
import SignUp from './component/signin&up/SignUp.jsx';
import SignIn from './component/signin&up/SignIn.jsx';
import Home from './component/Home/Home.jsx';
import ErrorPage from './component/error/ErrorPage.jsx';
import Root from './component/Root.jsx';
import AddBlog from './component/blogs/AddBlog.jsx';
import AllBlog from './component/blogs/AllBlog.jsx';
import FeaturedBlogs from './component/blogs/FeaturedBlogs.jsx';
import WishList from './component/blogs/WishList.jsx';
import BlogDetails from './component/blogs/BlogDetails.jsx';
import UseAxios from './component/hooks/UseAxios.jsx';
import Editeblog from './component/blogs/Editeblog.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClint=new QueryClient()
const axiosurl = UseAxios();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allblog",
        element: <Privet><AllBlog></AllBlog></Privet>, 
      },
      {
        path: "/addblog",
        element:<Privet> <AddBlog></AddBlog></Privet>,
      },
      {
        path:"/blogdetails/:id",
        element:<Privet><BlogDetails></BlogDetails></Privet>,
        loader:({params})=> axiosurl.get(`/blogs/${params.id}`)
      },
      {
        path:"/editeblog/:id",
        element:<Privet><Editeblog></Editeblog></Privet>,
        loader:({params})=> axiosurl.get(`/blogs/${params.id}`)
      },
      {
        path: "/featureblog",
        element: <FeaturedBlogs
        ></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element: <Privet><WishList></WishList></Privet>,
        loader:()=> axiosurl.get("/wishlist")
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClint}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
