import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/Home/ToyDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Order from "../Pages/Order/Order";
import UpdateOrder from "../Pages/Order/UpdateOrder";
import AllToy from "../Pages/AllToy/AllToy";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import DetailsAllToys from "../Pages/AllToy/DetailsAllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    errorElement:<ErrorPage />
  
  ,
  children:[
    {
      path:'/',
      element:<Home />
    },
    // {
    //   path:'/toys',
    //   element:<AllToy />
    // },
    
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/register',
      element: <Register />
    },{
      path:'/blog',
      element:<Blog />
    }
    ,{
      path:'/toys/:id',
      element: <PrivateRoute> <ToyDetails/> </PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
     
    },{
      path:'/checkout/:id',
      element: <CheckOut />,
      loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
    },
    {
      path:'/mytoy',
      element:<Order />
    }
    ,
    {
      path:'/order/:id',
      element:<UpdateOrder />,
      loader:({params})=>fetch(`http://localhost:5000/order/${params.id}`)
    },
    {
      path:'/toys',
      element:<AllToy />,
      loader: ()=> fetch('http://localhost:5000/toys')
    
    },
    {
      path:'/details/:id',
      element: <PrivateRoute><DetailsAllToys /></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)

    }
  ]
  },
]);
export default router;