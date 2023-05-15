import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Booking from "../Pages/Booking/Booking";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/bookservice/:id",
            element: <PrivateRoutes><BookService /></PrivateRoutes>,
            loader: ({params}) => fetch(`https://car-doctor-server-omega-seven.vercel.app/services/${params.id}`)
        },
        {
          path: '/booking',
          element: <PrivateRoutes><Booking /></PrivateRoutes>
        },
      ]
    },
  ]);

  export default router