import React, { useContext } from "react";
import TecnologiesStyle from "./TecnologiesStyle";
import cssIcon from "../../assets/images/css-icon.png";
import htmlIcon from "../../assets/images/html-icon.png";
import javascriptIcon from "../../assets/images/javascriptIcon.png";
import typescriptIcon from "../../assets/images/typescript-icon.png";
import pythonIcon from "../../assets/images/python-icon.png";
import postgresIcon from "../../assets/images/postgres-icon.png";
import sqlIcon from "../../assets/images/sql-icon.png";
import mongodbIcon from "../../assets/images/mongodb-icon.png";
import prismaIcon from "../../assets/images/prisma-icon.png";
import nodeIcon from "../../assets/images/node-icon.png";
import reactIcon from "../../assets/images/react-icon.png";
import jestIcon from "../../assets/images/jest-icon.png";
import seleniumIcon from "../../assets/images/selenium-icon.png";
import awsIcon from "../../assets/images/aws-icon.png";
import dockerIcon from "../../assets/images/docker-icon.png";
import { LanguageContext } from "../../App";


export default function Tecnologies() {

	const language = useContext(LanguageContext)[0];

	return (    
		<TecnologiesStyle id="tecnologies">
			<div className="titles">
				{
					language === "en" ?
					<>
					<h1>TECHNOLOGIES</h1>
					<h2>Technologies that I dominate and use in my projects</h2>
					</>
					:
					<>
					<h1>TECNOLOGIAS</h1>
					<h2>Tecnologias que domino e utilizo nos meus projetos</h2>
					</>
				}
			</div>
			<div className="all-tecnologies">
				<div className="tecnologies-container">
					<h3>Front-end</h3>
					<div className="icons">
						<div className="tecnology htmlIcon">
							<h4>HTML</h4>
							<img src={htmlIcon} alt="HTML5 Icon"/>
						</div>
						<div className="tecnology">
							<h4>CSS</h4>
							<img src={cssIcon} alt="CSS3 Icon"/>
						</div>
						<div className="tecnology">
							<h4>JavaScript</h4>
							<img src={javascriptIcon} alt="JavaScript icon"/>
						</div>
						<div className="tecnology">
							<h4>React</h4>
							<img src={reactIcon} alt="React icon"/>
						</div>
					</div>
				</div>
				<div className="tecnologies-container">
					<h3>Back-end</h3>
					<div className="icons">
						<div className="tecnology">
							<h4>Node</h4>
							<img src={nodeIcon} alt="Node Icon"/>
						</div>
						<div className="tecnology">
							<h4>TypeScript</h4>
							<img src={typescriptIcon} alt="Typescript Icon"/>
						</div>
						<div className="tecnology">
							<h4>Python</h4>
							<img src={pythonIcon} alt="PythonIcon"/>
						</div>
					</div>
				</div>
				<div className="tecnologies-container">
					<h3>{language === "en" ? "Databases/ORMs" : "Banco de dados e ORMs"}</h3>
					<div className="icons">
						<div className="tecnology">
							<h4>SQL</h4>
							<img src={sqlIcon} alt="Sql Icon"/>
						</div>
						<div className="tecnology">
							<h4>PostgreSQL</h4>
							<img src={postgresIcon} alt="Postgres Icon"/>
						</div>
						<div className="tecnology">
							<h4>MongoDB</h4>
							<img src={mongodbIcon} alt="MongoDb Icon"/>
						</div>
						<div className="tecnology">
							<h4>Prisma</h4>
							<img src={prismaIcon} alt="Prisma Icon"/>
						</div>
					</div>
				</div>
				<div className="tecnologies-container">
					<h3>{language === "en" ? "Tests" : "Testes"}</h3>
					<div className="icons">
						<div className="tecnology">
							<h4>Jest</h4>
							<img src={jestIcon} alt="Jest Icon"/>
						</div>
						<div className="tecnology">
							<h4>Selenium</h4>
							<img src={seleniumIcon} alt="Selenium Icon"/>
						</div>
					</div>
				</div>
				<div className="tecnologies-container">
					<h3>{language === "en" ? "Others" : "Outros"}</h3>
					<div className="icons">
						<div className="tecnology">
							<h4>AWS</h4>
							<img src={awsIcon} alt="AWS Icon"/>
						</div>
						<div className="tecnology">
							<h4>Docker</h4>
							<img src={dockerIcon} alt="Docker Icon"/>
						</div>
					</div>
				</div>
			</div>
		</TecnologiesStyle>
	);
}