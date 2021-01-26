import React from "react";
import styled from "styled-components";
import { PageWrapper, theme } from "../utils/style";
import tanBg from "../media/tanBackgroundMobile.svg";
import { Helmet } from "react-helmet";

const Container = styled.div`
	background: url(${tanBg});
	background-size: cover;
	height: 80vh;
	padding: 5rem 3rem;
`;
const ContactCard = styled.div`
  box-shadow: 4px 4px 15px 5px ${theme.colors.black};
	display: flex;
	flex-direction: column;
	align-items: center;
  border-radius: 5px;
  width: 50%;
  margin: 20vh auto;
	h1 {
		font-size: 2rem;
	}
	h4 {
		font-size: 1.2rem;
	}
`;
export default function Contact() {
	return (
		<PageWrapper>
			<Helmet></Helmet>
			<Container>
				<ContactCard>
					<h1>G.C. Matson</h1>
					<h4>816-985-6083</h4>
				</ContactCard>
			</Container>{" "}
		</PageWrapper>
	);
}
