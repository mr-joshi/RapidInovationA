import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';
import styled from 'styled-components';
import { FaSun } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";


const Button = styled.button`
  background-color: transparent;
  color:white;
  border: none;
  cursor: pointer;
  padding:0;
`;
const Container=styled.div`
display:flex;
align-items:center;
gap:4px
`

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleToggle = () => {
console.log(  theme
)
    dispatch(toggleTheme());
  };

  return (
    <Button onClick={handleToggle}>
    {theme === 'light' ? <Container>
    <FaSun size={18}/>
    Dark
    </Container> : <Container>
    <FaRegSun size={18}/>
    Light
    </Container>}
  </Button>
  );
};

export default ThemeToggle;
