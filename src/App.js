import React from 'react';
import {Container} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import MyAppBar from './components/AppBar';
import AppRoutes from './util/routes';

function App() {
  return (
    <Router>
      <MyAppBar />
      <Container>
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
