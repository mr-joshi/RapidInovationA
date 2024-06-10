import React from 'react';
import styled from 'styled-components';
import { FaStore, FaShoppingBag, FaPen, FaImage } from 'react-icons/fa';

const Section = styled.section`
  padding: 3rem 0;
  background-color: white;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 12px 8px;
  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`;

const Card = styled.div`
  text-align: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
  margin: 0 auto 16px;
  color: #635bff;
  font-size: 32px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.875rem;
`;

const OurFolio= ()=> {
  return (
    <Section>
    <Container>
      <Card>
        <IconWrapper>
          <FaStore />
        </IconWrapper>
        <Title>Local Business</Title>
        <Description>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</Description>
      </Card>
      <Card>
        <IconWrapper>
          <FaShoppingBag />
        </IconWrapper>
        <Title>Online Store</Title>
        <Description>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</Description>
      </Card>
      <Card>
        <IconWrapper>
          <FaPen />
        </IconWrapper>
        <Title>Blogging</Title>
        <Description>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</Description>
      </Card>
      <Card>
        <IconWrapper>
          <FaImage />
        </IconWrapper>
        <Title>Portfolio</Title>
        <Description>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</Description>
      </Card>
    </Container>
    </Section>
  );
}

export default OurFolio;