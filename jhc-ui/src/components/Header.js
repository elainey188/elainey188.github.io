import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../images/jhc logo.png';

function Header() {
  return (
    <header className="header">
        <div className="logo-container">
       
        <Link to="/">
          <img src={logo} alt="JobHubCentral Logo" className="logo" />
        </Link>
        <h2>JOBHUBCENTRAL</h2>
      </div>
      <nav>
        <ul>
          
<li><Link to="/pages/Jobs"  className="header-link" >My Jobs</Link></li>
<li><Link to="/pages/Employers"  className="header-link">Employers</Link></li>
<li><Link to="/pages/Login" className="header-link">Sign In</Link></li>
<li><Link to="/pages/Upload"  className="header-link">Upload Resume/Cover Letter</Link></li>



        </ul>
      </nav>
     
    </header>
  );
}

export default Header;



