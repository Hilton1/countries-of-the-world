import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import darkTheme from '../../assets/styles/themes/dark';
// import lightTheme from '../../assets/styles/themes/light';

import { Container } from './styles';
import Routes from '../../Routes';

import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
