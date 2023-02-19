import React, { useContext } from "react";
import Project from "../Project/Project";
import ProjectsStyle from "./ProjectsStyle";
import projectsData, { englishProjectsData } from "./ProjectsData";
import { LanguageContext } from "../../App";

export default function Projects() {

    const language = useContext(LanguageContext)[0];
    return (
        <ProjectsStyle id="projects">
            <div className="title">
                <h1>{language === "en" ? "PROJECTS" : "PROJETOS"}</h1>
            </div>
            <div className="projects">
                {language === "en" ?
                englishProjectsData.map((value, index) => <Project value={value} key={index}/>)
                :
                projectsData.map((value, index) => <Project value={value} key={index}/>)
                }
            </div>
            <p>{language === "en" ?
            `The repositories of these projects can be found in my GitHub\nThe "Take a look" button will take you directly to the back-end repository if there is no deployment available for the website`
            :
            `Os repositórios de todos esses projetos podem ser encontrados no meu github\nO link "dê uma olhada" te levará diretamente para o repositório do back-end caso o projeto se trate apenas da API`}</p>
        </ProjectsStyle>
    )
}