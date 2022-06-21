import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoryButton.scss";

const CategoryButton = ({ children, destination }) => {
  return (
    <NavLink
      to={destination}
      className={({ isActive }) =>
        isActive ? "category-button active" : "category-button"
      }
    >
      {children}
    </NavLink>
  );
};

export default CategoryButton;
