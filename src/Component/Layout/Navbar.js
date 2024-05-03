import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>
          <i className={Navbar.defaultProps.icon}></i>{" "}
          {Navbar.defaultProps.title}
        </h1>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa-brands fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
