import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/Login";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },
        {
            path: '/blog', 
            element: <Blog></Blog>
        },
        {
            path: '/login', 
            element: <Login></Login>
        },
      ]
    }
  ])

  export default router;