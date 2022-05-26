import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
	  <nav className="navbar">
        <div className="navbar-container container">
		<input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link classNameName="navbar-brand" to="/">Home</Link></li>
				<li><button type="button" class="btn btn-elegant waves-effect waves-light">Add User</button></li>
            </ul>
            <h1 className="logo">React App</h1>
        </div>
    </nav>
  );
}

export default Navbar; 