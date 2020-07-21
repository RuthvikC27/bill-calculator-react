import React from 'react';
import 'fontsource-roboto';
import BillSplit from './BillSplitter/BillSplit';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
// Link
/* <Redirect to="/" /> */

import Route from 'react-router-dom/Route';



function App() {  
  return (
    <Router>
      <ul>
        <li><NavLink exact activeStyle={{color: 'green'}} to="/">Home</NavLink></li>
        <li><NavLink exact activeStyle={{color: 'green'}} to="/user/ruthvik_vanam">User</NavLink></li>
      </ul>
      <Route path="/" exact strict component={BillSplit}/>
      <Route path="/user/:username" exact strict render={
          ({match}) => {return (<h1 align="center">Hello, {match.params.username}</h1>)}
        } />
    </Router>
  );
}

export default App;
