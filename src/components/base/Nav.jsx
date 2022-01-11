import React from "react";
import { IoBeer } from "react-icons/io5";
function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg p-4">
      <div className="container-fluid">
        <a
          className="navbar-brand text-warning d-flex align-items-center"
          to="/"
        >
          <IoBeer size={50} /> <span className="h3 ms-2"> Caryatid </span>
        </a>
      </div>
    </nav>
  );
}
export default Nav;
