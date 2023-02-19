import React, { useState } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-height: 400px;
    height: auto;
    margin: 0 auto;  
  }
  ion-icon {
    color: white;
    font-size: 2.6em;
    align-self: center;
    margin: 20px;
  }
  @media (max-width: 700px) {
     flex-direction: row;
     img {
        width: 100%;
     }
  }
`;

const SlideContainer = styled.div`
  display: flex;
`;

const DotContainer = styled.div`
  @media (max-width: 700px) {
    position: absolute;
    bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#000" : "#ddd")};
  margin: 0 0.5rem;
  cursor: pointer;
`;

const Carousel = ({images}) => {
	const [currentImage, setCurrentImage] = useState(0);

	const handleDotClick = (index) => {
		setCurrentImage(index);
	};
    
    const handleChange = (value) => {
        setCurrentImage((currentImage + value + images.length) % images.length)
    }

	return (
		<Wrapper currentImage={currentImage}>
			<SlideContainer>
                <ion-icon classname="left" onClick={() => handleChange(-1)} name="chevron-back-circle-outline"></ion-icon>
				<img src={images[currentImage]} alt="website slide-show"/>
                <ion-icon className="right" onClick={() => handleChange(1)} name="chevron-forward-circle-outline"></ion-icon>
			</SlideContainer>
			<DotContainer>
				{images.map((_, index) => (
					<Dot key={index} active={index === currentImage} onClick={() => handleDotClick(index)} />
				))}
			</DotContainer>
		</Wrapper>
	);
};

export default Carousel;
