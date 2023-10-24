import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home/Home";
import ContactForm from "../Pages/Main/contact/ContactForm";
import About from "../Pages/Main/About/About";
import Login from "../Pages/Main/Login/Login";
import Register from "../Pages/Main/Register/Register";
<<<<<<< HEAD
import UserProfile from "../Component/Main/UserProfile/UserProfile";
import BookTicketComponent from "../Component/Main/BookTicket/BookTicketComponent";
import BookBusComponent from "../Component/Main/BookBus/BookBusComponent";
=======
import Error from "../Pages/Main/404/Error";
import UserProfile from "../Component/Main/UserProfile/UserProfile";
import BookTicketComponent from "../Component/Main/BookTicket/BookTicketComponent";
import BookBusComponent from "../Component/Main/BookBus/BookBusComponent";

import DashboardHome from "../Pages/DashBoard/DashboardHome/DashboardHome";
import MainDashBoard from "../Layout/Dashboard/MainDashBoard/MainDashBoard";
import PostNotes from "../Pages/DashBoard/PostNotes/PostNotes";

>>>>>>> 980d419322f461d3838739716a2a7a5a4d8cb5bb
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
        path: "/book-ticket",
        element: <BookTicketComponent></BookTicketComponent>, // done
      },
      {
        path: "/book-bus",
        element: <BookBusComponent></BookBusComponent>,
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>, // done
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
    element: <MainDashBoard></MainDashBoard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/post-notes",
        element: <PostNotes></PostNotes>,
      },
    ],
  },
]);
