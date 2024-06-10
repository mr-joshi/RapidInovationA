import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';

const ThemedApp = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  
  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
