import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const CustomNavLink = ({ children, location }) => {
  const currentLocation = useLocation();
  return (
    <Link
      to={location}
      className={
        location === currentLocation.pathname ? "nav-link active" : "nav-link"
      }
    >
      {children}
    </Link>
  );
};

export default CustomNavLink;
