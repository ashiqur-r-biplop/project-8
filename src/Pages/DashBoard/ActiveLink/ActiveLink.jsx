import "./ActiveLink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="active-link"
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
