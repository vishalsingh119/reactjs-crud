import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const history = useNavigate();

	return (
	  <nav className="navbar">
        <div className="navbar-container container">
		<input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>

            <h1 className="logo">React App</h1>
            <ul className="menu-items">
                <li><Link className="navbar-brand" to="/">Home</Link></li>
				<li><button type="button" className="btn" onClick={() => { history("/add-user");}}>Add User</button></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar; 