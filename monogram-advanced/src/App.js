import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "./components/footer/footer";
// import Topheader from "./components/topheader/topheader";
// import Lowerheader from "./components/lowerheader/lowerheader";
// import Form from "./components/previewfont/previewfont.js"
import Size from "./Pages/Size";
import Main from "./Pages/Main";
import './App.css';


const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Size" component={Size} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

