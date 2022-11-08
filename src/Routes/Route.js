import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddService from "../services/AddService";
import ServiceDetails from "../services/ServiceDetails";
import Services from "../services/Services";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000')
        },
        {
            path: '/blog', 
            element: <Blog></Blog>
        },
        {
            path: '/login', 
            element: <Login></Login>
        },
        {
            path: '/signup', 
            element: <SignUp></SignUp>
        },
        {
            path: '/services', 
            element: <Services></Services>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path: '/services/:id', 
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/addService', 
            element: <AddService></AddService>
            
        },
      ]
    }
  ])

  export default router;