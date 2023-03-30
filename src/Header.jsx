import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return <div>
    <div className="construct">
      <div className="row mt-4 p-3">
      <div className="col-lg-6">
      <img src="https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2022/01/shop-logo.png" alt="Something" /></div>
      <div className="col-lg-6 text-end ">
<button type="button" className="btn btn-primary position-relative">
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

      </div>
      </div>
    </div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
    
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  </div>;
}
