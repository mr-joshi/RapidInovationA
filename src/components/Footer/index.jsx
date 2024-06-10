import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
  background-color: #191e23;
  color: white;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 8px 4px;
  
  @media (min-width: 640px) {
    padding: 32px 24px;
  }
  
  @media (min-width: 1024px) {
    padding: 64px 32px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  space-y: 4px;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  & > a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #2d3748;
  margin-top: 32px;
  padding-top: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const LogoImage = styled.img`
  height: 24px;
  width: 24px;
`;

const LogoText = styled.span`
  font-weight: 600;
  margin-left: 8px;
`;

const Motto = styled.div`
  font-size: 0.875rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }

  & > svg {
    height: 16px;
    width: 16px;
  }
`;

const FooterComponent=()=> {
  return (
    <Footer>
      <Container>
        <Grid>
          <Column>
            <Title>About</Title>
            <List>
              <ListItem>
                <Link to="#">News</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Hosting</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Privacy</Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Title>Showcase</Title>
            <List>
              <ListItem>
                <Link to="#">Themes</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Plugins</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Patterns</Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Title>Learn</Title>
            <List>
              <ListItem>
                <Link to="#">Documentation</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Developers</Link>
              </ListItem>
              <ListItem>
                <Link to="#">WordPress.tv</Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Title>Get Involved</Title>
            <List>
              <ListItem>
                <Link to="#">Events</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Donate</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Swag Store</Link>
              </ListItem>
            </List>
          </Column>
        </Grid>
        <FooterBottom>
          <LogoContainer>
            <LogoImage src="https://w7.pngwing.com/pngs/271/734/png-transparent-wordpress-logo-blog-symbol-template-emblem-web-design.png" alt="WordPress Logo" />
            <LogoText>WordPress.org</LogoText>
          </LogoContainer>
          <Motto>CODE IS POETRY</Motto>
          <SocialLinks>
            <SocialLink href="#">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="#">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#">
              <FaGithub />
            </SocialLink>
            <SocialLink href="#">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="#">
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </Footer>
  );
}

export default FooterComponent