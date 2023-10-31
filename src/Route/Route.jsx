import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home/Home";
import ContactForm from "../Pages/Main/contact/ContactForm";
import About from "../Pages/Main/About/About";
import Login from "../Pages/Main/Login/Login";
import Register from "../Pages/Main/Register/Register";
import Error from "../Pages/Main/404/Error";
import UserProfile from "../Component/Main/UserProfile/UserProfile";
import BookTicketComponent from "../Component/Main/BookTicket/BookTicketComponent";
import BookBusComponent from "../Component/Main/BookBus/BookBusComponent";

import DashboardHome from "../Pages/DashBoard/DashboardHome/DashboardHome";
import MainDashBoard from "../Layout/Dashboard/MainDashBoard/MainDashBoard";
import PostNotes from "../Pages/DashBoard/PostNotes/PostNotes";
import Feedback from "../Component/Main/Home/Feedback";
import BusPostForm from "../Pages/Main/BusManaged/BusPostForm";
import Myticket from "../Pages/DashBoard/Myticket/Myticket";
import AllTicket from "../Pages/DashBoard/Admin/AllTicket";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import PrivateRoute from "../Hook/PrivateRoute";
import Faq from "../Pages/Main/Faq/Faq";
import AdminRoute from "../Hook/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>, // done
    children: [
      {
        path: "/",
        element: <Home></Home>, // done
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>, // done
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/book-ticket",
        element: (
          <PrivateRoute>
            <BookTicketComponent></BookTicketComponent>
          </PrivateRoute>
        ), // done
      },
      {
        path: "/book-bus",
        element: (
          <PrivateRoute>
            <BookBusComponent></BookBusComponent>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>, // done
      },
      {
        path: "/my-ticket",
        element: <Myticket></Myticket>,
      },
      {
        path: "/user-feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "/login",
        element: <Login></Login>, // done
      },
      {
        path: "/register",
        element: <Register></Register>, // done
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <MainDashBoard></MainDashBoard>
      </AdminRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/profile",
        element: (
          <AdminRoute>
            <DashboardHome></DashboardHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/postBus",
        element: (
          <AdminRoute>
            <BusPostForm></BusPostForm>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-ticket",
        element: (
          <AdminRoute>
            <Myticket></Myticket>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-ticket",
        element: (
          <AdminRoute>
            <AllTicket></AllTicket>
          </AdminRoute>
        ), //For Admin
      },
      {
        path: "/dashboard/all-user",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ), //For Admin
      },
      {
        path: "/dashboard/post-notice",
        element: (
          <AdminRoute>
            <PostNotes></PostNotes>,
          </AdminRoute>
        ),
      },
    ],
  },
]);
