import * as React from "react"
import { Router } from "@reach/router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { theme, GlobalStyle } from "./utils/style";
import Nav from "./components/Nav";

function App() {


	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Nav navOpen={true} />
			<AnimatePresence location={location} key={location.pathname}>
				<Router>
					<Route path="/" exact component={Home} />
				</Router>
			</AnimatePresence>
		</ThemeProvider>
	);
}


export default IndexPage
