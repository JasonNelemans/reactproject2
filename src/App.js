import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/profile" component={Profile}/>
        <Route path="/" component={Main} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
