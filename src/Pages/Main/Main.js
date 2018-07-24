import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Topheader from "../../components/topheader/topheader";
import Lowerheader from "../../components/lowerheader/lowerheader";
import Form from "../../components/previewfont/previewfont.js"
// import logo from './images/main_logo.png';
import './Main.css';


class Main extends Component {
  render() {
    return (
      <div className="Main">
     <Topheader />
     <Lowerheader />
     <Form />
     <Footer />
      </div>
    );
  }
}

export default Main;