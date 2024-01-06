import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid animate__zoomInDown">
          <Link className="navbar-brand" to="/">SACHIN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">PROJECTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/tech">TECHNOLOGIES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">CONTACT</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
