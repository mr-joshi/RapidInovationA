import React from 'react';
import styled from 'styled-components';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const Section = styled.section`
  padding: 3rem 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
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

const Image = styled.img`
  margin-bottom: 1rem;
`;

const Text = styled.p`
  text-align: center;
`;

const ServicesSection = () => {
  return (
    <Section>
      <Container>
        <Title>Our Services</Title>
        <GridContainer>
          <Card bgColor="#FFE8E8">
            <MdOutlineShoppingCart size={160}/>
            <Text>E-Commerce</Text>
          </Card>
          <Card bgColor="#E0F2FE">
            <FaRegThumbsUp size={160}/>
            <Text>Customer Support</Text>
          </Card>
          <Card bgColor="#FFFDE7">
            <BsLightningChargeFill size={160}/>
            <Text>Speed Optimization</Text>
          </Card>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default ServicesSection;
