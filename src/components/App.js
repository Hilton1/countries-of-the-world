import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../assets/styles/global';
import darkTheme from '../assets/styles/themes/dark';
// import lightTheme from '../assets/styles/themes/light';

import Routes from '../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
