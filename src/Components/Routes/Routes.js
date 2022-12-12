import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Details from "../Details/Details";
import Home from "../Home/Home/Home";
import Main from "../Main/Main";

export const router=createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:`/details/:id`,
            element:<Details></Details>,
            // loader: (params) => fetch("project.json")
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
}])