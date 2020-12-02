/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="navbar-brand">Myntra</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">MEN</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">WOMEN</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">KIDS</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">HOME & LIVING</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">OFFERS</a>
          </li>
        </ul>
      </div>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Navbar;