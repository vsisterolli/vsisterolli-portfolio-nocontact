import styled from "styled-components";
import { primaryBrightColor, primaryDarkColor, primaryTextColor, secondaryBrightColor, secondaryDarkColor, secondaryTextColor } from "../../assets/styles/colors";

const TecnologiesStyle = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme[0] === "dark" ? primaryDarkColor : primaryBrightColor};
    padding-top: 110px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    clear: both;
    .titles {
        position: absolute;
        top: 10%;
        width: 100%;
    }
    h1 {
        color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
        text-align: center;;
        font-size: 2.6em;
        font-family: "Inter Tight";
    }
    h2 {
        color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
        text-align: center;
        margin-top: 8px;
        font-size: 1.4em;
        font-family: "Noto Sans";
        margin-bottom: 20px;
    }
    .all-tecnologies {
        justify-self: center;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        h3 {
            font-size: 1.4em;
            font-family: "Noto Sans";  
            color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
            text-align: center;
        }
    }
    .tecnologies-container {
        flex-basis: 30%;
        margin-bottom: 50px;
        h3 {
            margin-bottom: 12px;
        }
    }
    .icons {
        img {
            width: 4.6em;
            height: 4.6em;
        }
        .htmlIcon {
            img {
                width: 3.8em;
                height: 3.8em;
            }
            h4 {
                margin-top: 0px;
                margin-bottom: 4px;
            }
        }
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 800px;
        color: ${primaryTextColor};
        background-color: ${props => props.theme[0] === "dark" ? secondaryDarkColor : secondaryBrightColor};
        padding: 5px 20px;
    }
    .tecnology {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4 {
        margin-top: 8px;
        font-size: 1.1em;
        @media (max-width: 900px) {
            font-size: 0.9em;
        }
        font-family: "Noto Sans";  
        color: white;
        text-align: center;        
    }
    @media (max-width: 940px) {
        padding-top: 250px;
    }
`;

export default TecnologiesStyle;