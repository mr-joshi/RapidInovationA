import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/heroImage.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.nav`
  background: linear-gradient(90deg, #140096, #8204FF, #B90CFF);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center; 
`;

const MainData = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 16px 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  color: white;
`;

const DivContainerData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DivContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ButtonContainer = styled.button`
  margin: 20px 0px;
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  color: black;
  background-color: #FEDE00;
  height: 48px;
  max-width: 300px;

  &:hover {
    transform: scale(1.04);
    background-color: #FEDE01;
  }
`;

const Heading = styled.h1`
  font-size: 50px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ImageSection = styled.img`
  width: 100%;
`;

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MainData>
        <DivContainerData>
          <Heading>Your Idea Matters!</Heading>
          <div>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
          </div>
          <ButtonContainer
            onClick={() => {
              navigate('/contact-us');
            }}
          >
            Make A website
          </ButtonContainer>
        </DivContainerData>
        <DivContainerImg>
          <ImageSection src={heroImage} />
        </DivContainerImg>
      </MainData>
    </Container>
  );
};

export default HeroSection;
