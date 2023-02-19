import GlobalStyle from "./assets/styles/GlobalStyle";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import Projects from "./components/Projects/Projects";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import React, { createContext } from "react";
import { ThemeContext } from "styled-components";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

export const LanguageContext = createContext(null);

export default function App() {

	const params = new URLSearchParams(useLocation().search);
	const themeSetter = React.useState("dark");
	const languageSetter = React.useState(params.get("preferedLang") === "pt" ? "pt" : "en");

	return (
		<>
			<ThemeContext.Provider value={themeSetter}>
				<LanguageContext.Provider value={languageSetter}>
					<GlobalStyle/>
					<ToastContainer
						theme={themeSetter[0] === "dark" ? "dark" : "light"}
					/>
					<Header/>
					<IntroductionSection/>
					<AboutMe/>
					<Tecnologies/>
					<Projects/>
					<Contact/>
				</LanguageContext.Provider>
			</ThemeContext.Provider>
		</>
	);
}