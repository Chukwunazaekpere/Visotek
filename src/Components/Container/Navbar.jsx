import React from "react";
import "../Styles/NavStyles.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navFields = [
    "Testimonials",
    "Contact-us",
    "Specialities",
    "Team",
    "Portfolio",
    "Home",
  ];

  let pageSection = "";

  const handleMoveFocus = (field) => {
    pageSection = field;
  };

  return (
    <div className="nav-container">
      <section>
        {navFields.map((field) => (
          <ul key={field}>
            <li className="nav-menu">
              <a href={`#${field.toLowerCase()}`}>{field}</a>
            </li>
          </ul>
        ))}
        <h3 className="nav-brand">Visotek</h3>
      </section>
    </div>
  );
};

export default Navbar;
