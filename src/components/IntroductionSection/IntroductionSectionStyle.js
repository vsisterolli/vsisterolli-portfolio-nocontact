import styled from "styled-components";
import {brightBorderColor, darkBorderColor, primaryBrightColor, primaryDarkColor, primaryTextColor, secondaryBrightColor, secondaryDarkColor, secondaryTextColor} from "../../assets/styles/colors";

const IntroductionSectionStyle = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.theme[0] === "dark" ? primaryDarkColor : primaryBrightColor};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
        text-align: center;
        font-size: 2.6em;
        font-family: "Noto Sans";
    }
    a {
        display: ${props => props.buttonDisplay ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        position: absolute;
        padding: 15px 30px;
        border: solid 1px ${props => props.theme[0] === "dark" ? "silver" : brightBorderColor}; solid;
        text-decoration: none;
        border-radius: 80px;
        top: calc(100vh - 140px);
        color: ${primaryTextColor};
        font-family: "Roboto";
        font-size: 2em;
        background-color: ${props => props.theme[0] === "dark" ? secondaryDarkColor : secondaryBrightColor};
        :hover {
            cursor: pointer;
        }
        h2 {
            margin-bottom: 8px;
        }
    }
`;

export default IntroductionSectionStyle;