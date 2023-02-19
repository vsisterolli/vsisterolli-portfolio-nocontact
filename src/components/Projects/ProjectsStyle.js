import styled from "styled-components";
import { primaryTextColor, secondaryBrightColor, secondaryDarkColor } from "../../assets/styles/colors";


const ProjectsStyle = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme[0] === "dark" ? secondaryDarkColor : secondaryBrightColor};
    position: relative;
    flex-direction: column;
    padding-top: 200px;
    h1 {
        margin-bottom: 20px;
        color: ${primaryTextColor};
        text-align: center;
        font-size: 2.6em;
        font-family: "Inter Tight";
    }
    p {
        margin: 20px;
        color: ${primaryTextColor};
        text-align: center;
        font-size: 1.2em;
        font-family: "Roboto";
    }
    .title {
        position: absolute;
        top: 10%;
        left: 0px;
        width: 100%;
    }
    @media (max-width: 700px) {
        padding-top: 250px;
    }
    .projects {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        cursor: pointer;
    }
`;

export default ProjectsStyle;