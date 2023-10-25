import "./ActiveLink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="active-link"
      activeClassName="active"
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
