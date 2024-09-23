import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import League from './components/League';
import Team from './components/Team';
// import './styles/App.css';

const App = () => {
  return (
    <ApolloProvider client={client}> {}
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/league" element={<League />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
