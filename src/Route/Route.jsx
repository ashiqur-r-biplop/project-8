import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home/Home";
import ContactForm from "../Pages/Main/contact/ContactForm";
import About from "../Pages/Main/About/About";
import BookTicket from "../Pages/Main/BookTicket/BookTicket";
import BookBus from "../Pages/Main/BookBus/BookBus";
import Login from "../Pages/Main/Login/Login";
import Register from "../Pages/Main/Register/Register";
import UserProfile from "../Component/Main/UserProfile/UserProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/book-ticket",
        element: <BookTicket></BookTicket>,
      },
      {
        path: "/book-bus",
        element: <BookBus></BookBus>,
      },
      {
        path: '/user-profile',
        element:<UserProfile></UserProfile>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
//  dev-Ahad