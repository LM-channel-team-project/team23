import React from 'react';
import Router from './Routers';
import GlobalStyles from './Components/Common/GlobalStyles';
import { ThemeProvider } from 'styled-components';
function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          white: '#ffffff',
          darkblue: '#00112d',
          gray: '#353535',
          black: '#000000',
          orange: '#fd6f22',
        },
      }}
    >
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
