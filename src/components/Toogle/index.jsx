import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

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
    {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
  </Button>
  );
};

export default ThemeToggle;
