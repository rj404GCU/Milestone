import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<a className="navbar-brand" style="margin-left: 10px;" href="#">Milestone</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link active" to="/">Home</Link>
				</li>
				<li className="nav-item" role="button">
					<Link className="nav-link active" to="/create">AddProduct</Link>
				</li>
				<li className="nav-item" role="button">
					<Link className="nav-link active" to="/products">Products</Link>
				</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;