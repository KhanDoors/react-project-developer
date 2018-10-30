import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/" className="btn btn-floating red darken-4">
          SK
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;