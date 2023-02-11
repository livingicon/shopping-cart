// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import '../style.css';


const Nav = () => {
  return (
    <div>
        <nav>
          <h3>Company Logo</h3>
          <ul className="nav-links">
            <Link className="link" to='/home'>
              <li>Home</li>
            </Link>
            <Link className="link" to='/shop'>
              <li>Shop</li>
            </Link>
            {/* <li>{<Cart />}</li> */}
          </ul>
        </nav>
    </div>
  )
}

export default Nav;