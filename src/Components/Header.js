import { render } from "@testing-library/react";
import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from './logo-radiation.png';

const Header = () => {
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
						<NavLink href="/"> Home </NavLink>
						<NavLink href="/HalfLife"> Half-life </NavLink>
						<NavLink href="/RadiationMonitoring"> Radiation monitoring </NavLink>
						<NavLink href="/contacts"> Contacts </NavLink>
					</Nav>
				</NavbarCollapse>
			</Container>
			</Navbar>
		</>
	)
};

export default Header;