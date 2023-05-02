import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../CSS/styles.css';

export default class Navbar extends Component {
  render() {
    return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" to="/">
              Home
            </Link>
            <Link class="navbar-item" to="/opportunities">
              Opportunities
            </Link>
            <Link class="navbar-item" to="/login">
              Login
            </Link>
            <Link class="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
    )
  }
}
