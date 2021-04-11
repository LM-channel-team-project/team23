import React from 'react';
import Router from './Routers';
import GlobalStyles from './Components/Common/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
