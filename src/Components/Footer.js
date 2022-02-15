import React from "react";
import { } from "react-bootstrap";


const Footer = () => {
	return (
		<footer className="bg-dark text-center text-white fixed-bottom" >
			<div className="container p-4 pb-0">
				{/* <!-- Section: Social media --> */}
				<section className="mb-4">
					{/*  <!-- Facebook --> */}
					<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
					><i class="bi bi-facebook"></i></a>

					{/* <!-- Twitter --> */}
					<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
					><i className="bi bi-twitter"/></a>

					{/* <!-- Google --> */}
					<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
					><i className="bi bi-google"/></a>

					{/* <!-- Instagram --> */}
					<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
					><i className="bi bi-instagram" /></a>

					{/* <!-- Linkedin --> */}
					<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
					><i class="bi bi-linkedin" /></a>

					{/* <!-- Github --> */}
					<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
					><i className="bi bi-github" /></a>
				</section>
				{/* <!-- Section: Social media --> */}
			</div>
			{/* <!-- Grid container-- > */}

			{/* < !--Copyright --> */}
			<div className="text-center p-3" bg="dark" variant="dark">
				&copy; {new Date().getFullYear()} Copyright:
				<a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
			</div>
		</footer>
	)
};

export default Footer;
