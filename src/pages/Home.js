import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import tanBg from "../media/tanBackgroundMobile.svg";
import logo from "../media/homeBackgroundMobile.svg";
import { device } from "../utils/device";

const Container = styled.div`
	background: url(${tanBg});
	background-size: cover;
	height: 80vh;
	width: 100vw;
	position: absolute;
	display: flex;
	z-index: 1;
	@media ${device.laptop} {
		padding: 1rem 0 0 5rem;
	}
	img {
		position: relative;
		right: 8rem;
		top: 0;
		z-index: -1;
		opacity: 0.9;
		@media ${device.tablet} {
			transform: scale(1.5);
			top: 0rem;
			right: 16rem;
		}
		@media ${device.laptop} {
			right: 22rem;
			top: 1rem;
			transform: scale(1.8);
		}
	}
	div {
		width: 85vw;
	}
	h1 {
		margin: 4rem 0 0 0.5rem;
		padding: 0;
		font-size: 1.2rem;

		@media ${device.tablet} {
			font-size: 2.3rem;
			max-width: 50%;
			font-weight: normal;
			font-family: "handWriting";
		}
		@media ${device.laptop} {
			font-size: 2.5rem;
		}
	}
	h4 {
		margin: 0 0 0 0.5rem;
		color: ${props => props.theme.colors.orange};
		font-family: "handWriting";
		@media ${device.laptop} {
			font-size: 1.8rem;
		}
		@media ${device.tablet} {
			font-size: 1.5rem;
		}
	}
	p {
		font-family: "handWriting";
		padding: 0.5rem;
		max-width: 80%;
		font-size: 1rem;
		@media ${device.tablet} {
			max-width: 65%;
			font-size: 1.2rem;
		}
		@media ${device.laptop} {
			font-size: 1.2rem;
			max-width: 50%;
		}
	}
	#home-links {
		padding: 0.5rem;
		margin: 0;

		#learn-more {
			background: ${props => props.theme.colors.orange};
			color: ${props => props.theme.colors.white};
			text-transform: uppercase;
			font-size: 0.4rem;
			font-weight: bold;
			border-radius: 5px;
			padding: 0.3rem;
			@media ${device.tablet} {
				font-size: 0.6rem;
			}
			@media ${device.laptop} {
				font-size: 0.8rem;
			}
		}
		#get-quote {
			border-radius: 5px;
			padding: 0.3rem;
			text-transform: uppercase;
			font-size: 0.5rem;
			color: ${props => props.theme.colors.blue};
			font-weight: bold;
			border: none;
			z-index: 2;
			border-radius: 10px;
			background: ${props => props.theme.colors.offWhite};
			@media ${device.tablet} {
				font-size: 0.6rem;
			}
			@media ${device.laptop} {
				font-size: 0.8rem;
			}
		}
	}
`;
export default function Home() {
	return (
		<Container>
			<Helmet>
				<title>Home | Matson Bros. Painting</title>
				<meta
					name="keywords"
					content="matson, matson brothers, matson bros., matson bros, painting, matson bros painting, matson bros. painting, residential, commercial, stain, interior, exterior, interior painting, exterior painting, "
				/>
				<meta
					name="description"
					content="We are a small business based out of Oak Grove, Missouri - serving builders and homeowners across Eastern Jackson County for all of their painting needs"
				/>
			</Helmet>
			<div>
				<h1>
					Residential <br />
					{"&"} Commercial
				</h1>
				<h4>Interior {"&"} Exterior</h4>
				<p>
					Since 1987, we have provided high quality painting services for thousands of customers in
					and around eastern Jackson County. Whether you're looking to freshen things up, or need to
					paint a community of new-builds - we are your team!
				</p>
				<div id="home-links">
					<button id="learn-more">learn more</button>
					<button id="get-quote">get a quote</button>
				</div>
			</div>
			<img src={logo} alt="matson brothers painting" />
		</Container>
	);
}
