import HeaderStyle from "./HeaderStyle";
import { ThemeContext } from "styled-components";
import React from "react";
import { LanguageContext } from "../../App";
import ukIcon from "../../assets/images/uk-icon.png"
import brazilIcon from "../../assets/images/brazil-icon.png"
import { useLocation } from "react-router-dom";

export default function AboutMe() {
    
	const params = new URLSearchParams(useLocation().search);
	const [theme, setTheme] = React.useContext(ThemeContext);
	const [language, setLanguage] = React.useContext(LanguageContext);
	const [icon, setIcon] = React.useState("sunny");
	const [flag, setFlag] = React.useState(params.get("preferedLang") === "pt" ? brazilIcon : ukIcon);
	const [loading, setLoading] = React.useState(true);


	function changeTheme() {
		setIcon((theme === "dark" ? "moon" : "sunny"));
		setTheme((theme !== "dark" ? "dark" : "bright"));
	}

	React.useEffect(() => {
		setTimeout(() => setLoading(false), 5000)
	}, [])

	function changeLanguage() {
		if(loading)
			return;
		setLoading(true)
		setFlag((language === "en" ? brazilIcon : ukIcon));
		setLanguage((language === "en" ? "pt" : "en"));
		setTimeout(() => setLoading(false), 5000)
	}

	return (
		<HeaderStyle loading={loading}>
			<a href="#introduction"><h1>VSISTEROLLI</h1></a>
			<div className="options">
				<ul>
					{
						language === "en" ?
					<>
						<li><a href="#introduction">INTRODUCTION</a></li>
						<li><a href="#about-me">ABOUT ME</a></li>
						<li><a href="#tecnologies">TECHNOLOGIES</a></li>
						<li><a href="#projects">PROJECTS</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</>
					:
					<>
						<li><a href="#introduction">INTRODUÇÃO</a></li>
						<li><a href="#about-me">SOBRE MIM</a></li>
						<li><a href="#tecnologies">TECNOLOGIAS</a></li>
						<li><a href="#projects">PROJETOS</a></li>
						<li><a href="#contact">CONTATO</a></li>
					</>
					}
				</ul>
				<li onClick={changeTheme}><ion-icon name={icon}></ion-icon></li>
				<img onClick={changeLanguage} src={flag}/>
			</div>
		</HeaderStyle>
	);   
}