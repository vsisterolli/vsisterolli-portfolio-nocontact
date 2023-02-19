import React, { useContext } from "react";
import AboutMeStyle from "./AboutMeStyle";
import mypfp from "../../assets/images/my-pfp.jpeg";
import { LanguageContext } from "../../App";

export default function AboutMe() {

    const language = useContext(LanguageContext)[0];
	
	return (
		<AboutMeStyle id="about-me">
			<div className="title">
				<h1>{language === "en" ? "ABOUT ME" : "SOBRE MIM"}</h1>
			</div>
			<div className="description">
				<img src={mypfp} alt="my profile picture"/>
				<h2>{language ==="en" ?
				"Hello! I'm Victor Sisterolli. Fullstack Web Devoloper. Graduating in Computer Engineering at UNICAMP. I'm passionate about games and competitive programming. Tri-medallist of Brazilian Olympiad in Informatics and affectionate for algorithms. Acted in the elaboration of more than 20 web applications, creating RESTFul APIs and Responsive Layouts." :
				"Olá! Sou o Victor Sisterolli. Desenvolvedor Web Fullstack. Atualmente completando a graduação em Engenharia da Computação pela UNICAMP. Sou apaixonado por jogos e programação competitiva. Tri-medalhista da Olimpíada Brasileira de Informática e aficcionado por algoritmos. Já atuei na elaboração de mais de 20 projetos de aplicações web, criando APIs RESTFul e Layouts Responsivos."}</h2>
			</div>
		</AboutMeStyle>
	);
}