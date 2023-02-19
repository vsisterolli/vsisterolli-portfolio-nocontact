import styled from "styled-components";
import { primaryTextColor, secondaryBrightColor, secondaryDarkColor } from "../../assets/styles/colors";

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    color: ${primaryTextColor};
    z-index: 1;

    background-color: ${props => props.theme[0] === "dark" ? secondaryDarkColor : secondaryBrightColor };
    border-bottom: solid 1px silver;
    height: 80px;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    li {
        display: inline;
        font-family: "Roboto";
        font-weight: bold;
        margin-left: 20px;
        cursor: pointer;
    }
    a {
        font-family: "Roboto";
        font-weight: bold;
        cursor: pointer;
        color: ${primaryTextColor};
        text-decoration: none;
    }
    h1 {
        color: white;
        font-size: 2.6em;
        font-family: "Inter Tight";
        font-weight: 700;
    }
    .options {
        display: flex;
        align-items: center;
        ion-icon {
            font-size: 2.6em;
            margin-left: 20px;
        }
        img {
            width: 64px;
            margin: 15px;
            cursor: pointer;
            opacity: ${props => props.loading ? "60%" : "100%"};
        }
    }
    @media (max-width: 1050px) {
        h1 {
            font-size: 1.6em;
        }
        li {
            font-size: 0.8em;
        }
    }
    @media (max-width: 850px) {
        justify-content: center;
        h1 {
            font-size: 2em;
        }
        ul {
            display: none;
        }
    }
`;

export default HeaderStyle;