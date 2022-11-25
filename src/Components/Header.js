import React from 'react';


function Header() {
    return(
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="a.navbar-brand" href="./Natwest_service.html"><img src="https://www.natwest.com/content/dam/natwest_com/Logos/og-logo-nw.png" alt='' width="100" height="80"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/india">About Natwest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/india">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/india">Money Transfer</a>
          </li>  
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/india" role="button" data-bs-toggle="dropdown">Services</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/india">Link</a></li>
              <li><a className="dropdown-item" href="/india">Another link</a></li>
              <li><a className="dropdown-item" href="/india">A third link</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search"/>
          <button className="btn btn-primary" type="button">Search</button>
        </form>
        <div className="col">
        <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </nav>    

  </div>
    )
}

export default Header;