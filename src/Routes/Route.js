import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import AddReview from "../pages/review/AddReview";
import MyReview from "../pages/review/MyReview";
import UpdateReview from "../pages/review/UpdateReview";
import SignUp from "../pages/SignUp";
import AddService from "../services/AddService";
import ServiceDetails from "../services/ServiceDetails";
import Services from "../services/Services";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
            
        },
        
        {
            path: '/myReview', 
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/review')
            
        },
        {
            path: '/Review/:id', 
            element: <UpdateReview></UpdateReview>,
            
            
        },
        {
            path: '/*', 
            element: <PageNotFound></PageNotFound>
            
        },
      ]
    }
  ])

  export default router;