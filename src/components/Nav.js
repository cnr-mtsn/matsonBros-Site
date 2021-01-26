import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import textLogo from "../media/textLogo.svg";
import { IoArrowForwardCircle } from "react-icons/io5";
import { device } from "../utils/device";

const StyledContainer = styled(motion.header)`
  width: 100vw;
  z-index: 5;
	nav {
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 1rem 0 0;
	}
	ul {
		display: none;
		padding: 0;
		margin: 0;
	}
	li .nav-link {
		color: #201e1f;
		text-decoration: none;
		font-family: "Operator mono", sans-serif;
		text-transform: capitalize;
		font-size: 1.5rem;
    transition: all 0.3s ease;
    z-index: 100;
	}
	li .nav-link:hover {
		color: #50b2c0;
	}
	li .nav-link-active {
		color: #faaa8d;
		text-decoration: underline;
		text-decoration-color: #201e1f;
	}
	img {
		height: 80px;
		width: auto;
		border-radius: 5px;
	}
	.burger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20%;
		background: transparent;
		border: none;
		cursor: pointer;
		z-index: 10;
		&:focus {
			outline: none;
		}
		div {
			width: 1.8rem;
			margin: 0.2rem 0;
			height: 0.2rem;
			border-radius: 10px;
			transition: all 0.3s linear;
			position: relative;
			transform-origin: 1px;
		}
	}
	@media ${device.mobile} {
		img {
			height: 100px;
		}
		.burger {
			div {
				height: 0.25rem;
				width: 2rem;
				margin: 0.25rem 0;
			}
		}
	}
	@media ${device.tablet} {
		.burger {
			div {
				height: 0.4rem;
				width: 3rem;
				margin: 0.375rem 0;
			}
		}
		img {
			height: 120px;
		}
	}
	@media ${device.laptop} {
		ul {
			display: flex;
			gap: 2rem;
			li {
				list-style: none;
				padding: 1rem;
				align-self: flex-end;
			}
		}
		a {
			font-size: 2.2rem;
		}

		.burger {
			display: none;
		}
	}
	@media ${device.laptopL} {
		nav {
			flex-direction: row;
		}

		img {
			height: 120px;
			width: auto;
		}
	}
	@media ${device.desktop} {
	}
`;
const Container = ({ children }) => (
	<StyledContainer>
		<nav>{children}</nav>
	</StyledContainer>
);
const StyledBurger = styled.button`
	z-index: 20;
	div {
		background: ${({ open }) => (open ? "transparent" : "#201E1F")};
		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg) scaleX(1.1)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg) scaleX(1.1)" : "rotate(0)")};
		}
	}
`;
const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger className="burger" open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #201e1f;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(200%)")};
	height: 100vh;
	width: 50vw;
	position: fixed;
	top: 0;
	right: 0;
	transition: all 0.5s ease-in-out;
	opacity: 0.95;
	z-index: 15;

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		width: 60%;
		margin: 5vh 0 0 0;
		.mobile-nav-link {
			color: #feefdd;
			text-decoration: none;
			font-family: "Operator mono", sans-serif;
			box-shadow: 1px 1px 15px #ff4000;
			border-radius: 5px;
			padding: 0.5rem;
			margin: 1rem 0;
			text-align: center;
			transition: all 0.4s ease-in-out;
			text-transform: lowercase;
		}
		.mobile-nav-link:hover {
			box-shadow: 1px 1px 15px #50b2c0;
		}
		.mobile-nav-link-active {
			box-shadow: 1px 1px 15px #ffffff;
		}
	}

	.mobile-nav-header {
		display: flex;
		flex-direction: column;
		width: 100%;
		#back-arrow {
			margin: 0.5rem 0 0 0.5rem;
		}
		img {
			margin: 0 auto;
			width: 100%;
		}
	}
`;

const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<div className="mobile-nav-header">
				<IoArrowForwardCircle
					size={40}
					color="white"
					id="back-arrow"
					onClick={() => setOpen(!open)}
				/>
			</div>
			<div className="mobile-nav-links">
				<Link className="mobile-nav-link" activeClassName="mobile-nav-link-active" to="/">
					Home
				</Link>
				<Link className="mobile-nav-link" activeClassName="mobile-nav-link-active" to="/Contact">
					Contact
				</Link>
			</div>
		</StyledMenu>
	);
};
export default function Nav() {
	const [open, setOpen] = useState(false);
	return (
		<Container>
			<Menu open={open} setOpen={setOpen} />
			<img src={textLogo} alt="Matson Brother's Painting" />
			<ul>
				<li>
					<Link className="nav-link" activeClassName="nav-link-active" to="/">
						home
					</Link>
				</li>
				<li>
					<Link className="nav-link" activeClassName="nav-link-active" to="/Contact">
						Contact
					</Link>
				</li>
			</ul>
			<Burger open={open} setOpen={setOpen} />
		</Container>
	);
}
