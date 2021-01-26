import * as React from "react";
import { Router } from "@reach/router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";

/***** local imports *****/
import { theme, GlobalStyle } from "../utils/style";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import "../App.css";

function Index() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AnimatePresence>
				<Router>
					<Home path="/" exact />
					<Contact path="/contact" />
				</Router>
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default Index;
