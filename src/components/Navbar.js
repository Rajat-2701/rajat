import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" to="/home">
              {props.about}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/about">
              About
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <div className="form-check-inline ml-4">
           <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`}>
           <input type="checkbox" onClick={props.toggleMode} className="form-check-input" value=""/> Enable Dark mode
          </label>
        </div>
      </div>
    </nav>
  );
}
// Assinging values to the title whether it's a string, number or an array or an object
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
// Giving Default values to the Props:
Navbar.defaultProps = {
  title: "Set title here",
};
