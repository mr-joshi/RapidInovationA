// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const ThemedApp = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  
  React.useEffect(() => {
    document.body.style.backgroundColor = themeMode === 'light' ? lightTheme.body : darkTheme.body;
    document.body.style.color = themeMode === 'light' ? lightTheme.text : darkTheme.text;

  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ThemedApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
