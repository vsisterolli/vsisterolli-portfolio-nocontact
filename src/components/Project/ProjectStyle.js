import styled from "styled-components";
import { brightBorderColor, darkBorderColor, primaryTextColor } from "../../assets/styles/colors";

const ProjectStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    margin: 40px;
    width: 160px;
    position: relative;
    .modal-overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    h2 {
        font-family: "Roboto";
        color: ${primaryTextColor};
        text-align: center;
        font-size: 1.6em;
        margin-bottom: 12px;
    }
    .portrait {
        width: 15em;
        height: 15em;
        border: solid 2px ${props => props.theme[0] === "dark" ? darkBorderColor : brightBorderColor};
        border-radius: 20%;
        outline: 1px solid black;
        background-image: url(${props => props.image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export default ProjectStyle;