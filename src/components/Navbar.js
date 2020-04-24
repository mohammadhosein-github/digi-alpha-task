import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-4">
      <a className="navbar-brand" href="#users">
        Digi Alpha
      </a>
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#main-page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#album">
              Album
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#users">
              Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
