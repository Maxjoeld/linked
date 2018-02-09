import React from 'react';
import './navbar.css';
import Links from '../Links/links';
import Search from '../Search/search';

const NavBar = (props) => {
	return (
		<div className="nav-parent">
			<div className="navbar">
				<Search />
				<Links />
			</div>
		</div>
	)
}
export default NavBar;
