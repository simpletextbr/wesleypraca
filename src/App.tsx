import React from 'react';
import GlobalStyles from './styles/globalStyles'
import './App.css';

import Routes from './routes'

function App():JSX.Element {

  return (
    <React.Fragment>
      <GlobalStyles />
      <Routes />
    </React.Fragment>
  );
}

export default App
