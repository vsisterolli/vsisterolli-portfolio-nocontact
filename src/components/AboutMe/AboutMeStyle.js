import styled from "styled-components";
import { primaryTextColor, secondaryBrightColor, secondaryDarkColor } from "../../assets/styles/colors";


const AboutMeStyle = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.theme[0] === "dark" ? secondaryDarkColor : secondaryBrightColor};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        position: absolute;
        top: 15%;
    }
    h1 {
        color: ${primaryTextColor};
        text-align: center;
        font-size: 2.6em;
        font-family: "Inter Tight";
    }
    .description {
        width: 100%;
        padding: 0 80px;
        display: flex;
        margin-top: 40px;
        align-items: center;
        img {
            width: 18em;
            margin-right: 80px;
            border-radius: 100%;
            @media (max-width: 850px) {
                width: 12em;
            }
        }
        h2 {
            font-family: "Roboto";
            font-size: 1.6em;
            color: ${primaryTextColor};
        }
    }
    @media (max-width: 800px) {
        .description {
            flex-direction: column;
            justify-content: center;
            h2 {
                width: 100%;
                margin-bottom: 30px;
            }
            img {
                margin-right: 0px;
                margin-bottom: 30px;
            }
        }
    }
    @media (max-width: 800px) {
        padding-top: 200px;
    }
`;

export default AboutMeStyle;