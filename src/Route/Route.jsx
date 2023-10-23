import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home/Home";
import ContactForm from "../Pages/Main/contact/ContactForm";
import About from "../Pages/Main/About/About";
import Login from "../Pages/Main/Login/Login";
import Register from "../Pages/Main/Register/Register";
import BookTicketComponent from "../Component/Main/BookTicket/BookTicketComponent";
import BookBusComponent from "../Component/Main/BookBus/BookBusComponent";
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
        element: <BookTicketComponent></BookTicketComponent>,
      },
      {
        path: "/book-bus",
        element: <BookBusComponent></BookBusComponent>,
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