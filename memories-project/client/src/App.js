import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
          <Container maxWidth="lg">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/auth" exact element={<Auth />} />
            </Routes>
          </Container>
        </BrowserRouter>
      );
}

export default App;

// - use 'Routes' instead of 'Switch'
// - use 'element={<Home />}' instead of 'component={Home}' prop in 'Route' component
// - use 'navigate("/")' instead of history.push("/") : should import 'useNavigate' instead of 'useHistory'