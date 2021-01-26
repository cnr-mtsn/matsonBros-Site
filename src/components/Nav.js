import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import textLogo from "../media/textLogo.svg";
import { device } from "../utils/device";

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	@media ${device.laptopL} {
		height: 15vh;
	}
	img {
		width: 80vw;
		height: 100%;
		@media ${device.laptop} {
			margin: 0 0 0 5.5rem;
			width: auto;
		}
		@media ${device.laptopL} {
			height: 65%;
		}
	}
	button {
		background-color: ${props => props.theme.colors.blue};
		padding: 0.5rem;
		font-size: 1rem;
		color: ${props => props.theme.colors.white};
		font-weight: bolder;
		border-radius: 0.5rem;
	}
	.burger {
		@media ${device.laptopL} {
			display: none;
		}
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 20vw;
		height: 100%;
		background: transparent;
		border: none;
		padding: 0 0 0 0.8rem;
		cursor: pointer;
		z-index: 10;
		&:focus {
			outline: none;
		}
		div {
			width: 1.8rem;
			height: 0.2rem;
			border-radius: 10px;
			transition: all 0.3s linear;
			position: relative;
			transform-origin: 1px;
			margin: 0.2rem 0;
		}
	}
	ul {
		display: none;
		@media ${device.laptopL} {
			display: initial;
			display: flex;
			align-items: center;
			height: 100%;
			flex: 0.9;
			margin: 0 2rem 0 0;
			justify-content: space-evenly;
			li {
				padding: 1rem;
				border-radius: 10px;
				list-style: none;
				a {
					text-transform: uppercase;
					color: ${props => props.theme.colors.black};
					font-weight: bolder;
					text-decoration: none;
					letter-spacing: 1.2px;
					cursor: pointer;
				}
			}
		}
	}
`;
const NavLinks = () => (
	<ul>
		<li>
			<Link to="/">home</Link>
		</li>
		<li>
			<Link to="/about">about us</Link>
		</li>
		<li>
			<Link to="/services">services</Link>
		</li>
		<li>
			<Link to="/gallery">gallery</Link>
		</li>
		<button>Free Quote!</button>
	</ul>
);
const StyledBurger = styled.button`
	div {
		background: ${({ open }) => (open ? "transparent" : props => props.theme.colors.black)};
		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
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

export default function Nav() {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<StyledNav>
				<img src={textLogo} alt="Matson Brother's Painting" />
				<NavLinks />
				<Burger open={open} setOpen={setOpen} />
			</StyledNav>
		</header>
	);
}
