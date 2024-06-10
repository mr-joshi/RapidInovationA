import React from 'react';
import styled from 'styled-components';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const Section = styled.section`
  padding: 3rem 0;
  background-color: ${(props) => props.theme.body};`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};

`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor || 'white'};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;



const Text = styled.p`
  text-align: center;
  color: black;

`;
const Icon = styled.div`
  color: black;

`;

const ServicesSection = () => {
  return (
    <Section>
      <Container>
        <Title>Our Services</Title>
        <GridContainer>
          <Card bgColor="#FFE8E8">
          <Icon>
            <MdOutlineShoppingCart size={160}/>
            </Icon>
            <Text>E-Commerce</Text>
          </Card>
          <Card bgColor="#E0F2FE">
            <Icon>
            <FaRegThumbsUp size={160}/>
            </Icon>
            <Text>Customer Support</Text>
          </Card>
          <Card bgColor="#FFFDE7">
          <Icon>
            <BsLightningChargeFill size={160}/>
            </Icon>
            <Text>Speed Optimization</Text>
          </Card>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default ServicesSection;
