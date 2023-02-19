import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    p {
        white-space: pre-line;
    }
    html {
        scroll-behavior: smooth;
    }
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        overflow-x: hidden;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    // Animations
    @-webkit-keyframes slide-top {
        0% {
            -webkit-transform: translateY(150px);
                    transform: translateY(150px);
        }
        100% {
            -webkit-transform: translateY(0px);
                    transform: translateY(0px);
        }
    }
    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(150px);
                    transform: translateY(150px);
        }
        100% {
            -webkit-transform: translateY(0px);
                    transform: translateY(0px);
        }
    }
    
    .slide-top {
	        -webkit-animation: slide-top 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-top 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes slide-fwd-center {
        0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
        50% {
            -webkit-transform: scale(0.8);
                    transform: scale(0.8);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }
    @keyframes slide-fwd-center {
        0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
        50% {
            -webkit-transform: scale(0.8);
                    transform: scale(0.8);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

    
    .slide-fwd-center { 
	        -webkit-animation: slide-fwd-center 3s ease-out infinite both;
	        animation: slide-fwd-center 3s ease-out infinite both;
    }
    .big-on-hover {
        :hover {
            -webkit-animation: slide-fwd-center 3s ease-out infinite both;
	        animation: slide-fwd-center 3s ease-out infinite both;
        }
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #1c1c1c #3d3d3d;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: #3d3d3d;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #1c1c1c;
        border-radius: 10px;
        border: 3px none #383838;
    }
    :root {
        --toastify-font-family: "Roboto";
    }
`;

export default GlobalStyle;