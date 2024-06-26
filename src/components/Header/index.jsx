import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillAmazonCircle } from "react-icons/ai";
import ThemeToggle from '../Toogle/index'

const Container= styled.nav`
  background: linear-gradient(90deg, #140096, #8204FF, #B90CFF);
`
const NavContainer = styled.nav`
  max-width:1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  justify-content:center;
  align-items:center;
  text-decoration: none;
  &:hover {
    color: gray;
  }
  cursor:pointer;
`;

const LogoIcon=styled.div`
color: white;
cursor:pointer;
`

const LogoText = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: white;
  cursor:pointer;

`;

const NavLinks = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  space-x: 24px;
  @media (max-width: 768px) {
    space-x: 0;
    space-y: 16px;
  };
  @media (max-width: 468px) {
    font-size:12px;
  }
    
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

const Icon = styled.div`
  color: white;
  height: 24px;
  width: 24px;
`;


const Header = () => {
  return (
    <Container>    <NavContainer>
      <LogoContainer to='/'>
        <LogoIcon><AiFillAmazonCircle size={40} /></LogoIcon>
        <LogoText>ASTRA</LogoText>
      </LogoContainer>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
        <NavLink to="/task-page">TaskPage</NavLink>
        {/* <NavLink to="#">Services</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Reviews</NavLink>
        <NavLink to="#">Why Us</NavLink> */}
       <NavLink target="_blank" to="https://www.instagram.com/"><Icon><FaInstagram size={20} /></Icon></NavLink> 
       <NavLink target="_blank" to="https://www.facebook.com/"><Icon><FaFacebook size={20}/></Icon></NavLink> 
       <NavLink target="_blank" to="https://twitter.com/"><Icon><FaTwitter size={20} /></Icon></NavLink> 
       <ThemeToggle/>
      </NavLinks>
    </NavContainer>
    </Container>

  );
};

export default Header;
