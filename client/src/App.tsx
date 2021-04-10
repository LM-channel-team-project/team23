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
          gray: '#2b3137',
          lightGray: '#a0a0a0',
          black: '#000000',
          orange: '#fd6f22',
          red: '#f44336',
          jade: '#4D9BB0',
          lightJade: '#EFF7F9',
          purple: '#a06cff',
        },
      }}
    >
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
