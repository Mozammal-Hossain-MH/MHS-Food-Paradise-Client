import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'shop/:title',
        element: <Shop></Shop>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'sign-up',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'user-home',
        element: <UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },

      // admin routes
      {
        path: 'admin-home',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'add-items',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manage-items',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'update-item/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`https://mhs-food-paradise-server.vercel.app/menu/${params.id}`)
      }
    ]
  }
]);

export default router;