import React, { useContext } from "react";
import ContactStyle from "./ContactStyle";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import githubIcon from "../../assets/images/github-icon.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageContext } from "../../App";
import { Tooltip } from 'react-tooltip';


export default function Contact() {
	function copyContact(contact) {
		toast.success(`${contact.includes("@") ? "Email" : "WhatsApp"} copiado com sucesso!`);
		navigator.clipboard.writeText(contact);
	}
	const language = useContext(LanguageContext)[0];
	return (    
		<ContactStyle id="contact">
			<h1>{language === "en" ? "CONTACT" : "CONTATO"}</h1>
			<h2>{language === "en" ? "Have any idea in mind? Contact me, and we could make it became reality" : "Tem alguma ideia em mente? Me contate e podemos fazê-la se tornar realidade."}</h2>
			<div className="contact-me">
				<div>
					<div className="contact" onClick={() => copyContact("vsisterolli@gmail.com")}>
						<p>Email: vsisterolli@gmail.com</p>
						<ion-icon name="copy-outline"></ion-icon>
					</div>
					<div className="contact" onClick={() => copyContact("Telefone/WhatsApp: +55 (34) 99126-0031")}>
						<p>{language === "en" ? "Phone" : "Telefone"}/WhatsApp: +55 (34) 99126-0031</p>
						<ion-icon name="copy-outline"></ion-icon>
					</div>
				</div>
				<div className="icons">
					<a id="LinkedIn" href="https://www.linkedin.com/in/victorsisterolli/" target="_blank" rel="noreferrer" data-tooltip-content="LinkedIn"><img src={linkedinIcon} alt="linkedin icon"/></a>  
					<a href="https://github.com/vsisterolli" target="_blank" rel="noreferrer" data-tooltip-content="GitHub"><img src={githubIcon} alt="github icon"/></a>
				</div>
			</div>
		</ContactStyle>
	);
}