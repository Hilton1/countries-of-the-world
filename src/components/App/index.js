import { useState, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import themes from '../../assets/styles/themes';

import { Container } from './styles';
import Routes from '../../Routes';

import Header from '../Header';

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />

        <Container>
          <Header onToggleTheme={handleToggleTheme} />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
