import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/profile" />
        <Route path="/" component={Main} />
      </Switch>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
