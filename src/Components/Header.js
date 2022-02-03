import React, { Component } from 'react';
import logo from './logo-radiation.png';
import { Container, Nav, Navbar, NavbarBrand, /* NavLink */} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
/* import { Route, Router } from "react-router"; */
import { Routes, Route,  NavLink  } from "react-router-dom";
/* import { BrowserRouter as Route, Router, Switch } from "react-router-dom"; */

import Home from "../Pages/Home";
import Halflife from "../Pages/Halflife"
import Radiationmonitoring from "../Pages/Radiationmonitoring";
import Contacts from "../Pages/Contacts";
import Error from '../Pages/Error';


export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<NavbarBrand href="/">
							<img src={logo}
								hidden="30"
								width="30"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</NavbarBrand>
						<NavbarToggle aria-controls="responsive-navbsr-nav">

						</NavbarToggle>
						<NavbarCollapse id="responsive-navbsr-nav">
							<Nav className="mr-auto">
								<NavLink to="/" className='nav-link'> Home </NavLink>
								<NavLink to="/halflife" className='nav-link'> Half-life </NavLink>
								<NavLink to="/radiationmonitoring" className='nav-link'> Radiation monitoring </NavLink>
								<NavLink to="/contacts" className='nav-link'> Contacts </NavLink>
							</Nav>
						</NavbarCollapse>
					</Container>
				</Navbar>

				<Routes>
					
					<Route path="/" element={<Home />} />;
					<Route path="/halflife" element={<Halflife />} />;
					<Route path="/radiationmonitoring" element={<Radiationmonitoring/>} />;
					<Route path="/contacts" element={<Contacts/>} />;
					<Route path="*" element={<Error />} />;

				</Routes>
			</>
		)
	}
}
