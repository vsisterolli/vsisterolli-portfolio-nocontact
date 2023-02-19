import Modal from "react-modal";
import React from "react";
import styled from "styled-components";
import { brightAnchorColor, darkAnchorColor, primaryDarkColor, primaryTextColor, secondaryBrightColor } from "../../assets/styles/colors";

function ModalAdapter ({ className, modalClassName, ...props }) {

	return (
		<Modal
			className={modalClassName}
			portalClassName={className}
			{...props}
		/>    
	);
}

const StyledModal = styled(ModalAdapter).attrs({
	overlayClassName: "Overlay",
	modalClassName: "Modal"
})`
    .Modal {
      border-radius: 8px;
      position: fixed;
      z-index: 10;
      overflow-y: auto;
      overflow-x: hidden;
      height: 90vh;
      width: 90vw;
      background-color: ${props => props.theme[0] === "dark" ? primaryDarkColor : secondaryBrightColor};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
          padding-bottom: 10px;
          margin-top: 10px;
          margin-bottom: 30px;
          color: white;
          border-bottom: solid 1px silver;
          text-align: center;
          font-size: 2.6em;
          font-family: "Noto Sans";        
      }
      p {
          color: ${primaryTextColor};
          text-align: justify-all;
          font-size: 1.2em;
          margin: 40px auto;
          width: 80%;
          font-family: "Noto Sans";         
      }
      a {   
          font-size: 1.2em;
          font-family: "Noto Sans";
          color: ${props => props.theme[0] === "dark" ? darkAnchorColor : brightAnchorColor};
          text-decoration: none;
      }
      .link-project {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          margin: 10px;
      }
      .modal-header {
          margin-top: 60px;
          color: white;
          text-align: center;
          font-size: 2.6em;
          font-family: "Noto Sans";
          display: flex;
          justify-content: space-evenly;
      }
    }
    .Overlay {
      background-color: rgb(0, 0, 0, 0.75);
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;
      overflow-y: scroll;
    }
    overflow-y: scroll;
    overflow-x: hidden;
`;

export default StyledModal;