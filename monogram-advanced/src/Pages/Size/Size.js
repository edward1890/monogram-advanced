import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Topheader from "../../components/topheader/topheader";
import Lowerheader from "../../components/lowerheader/lowerheader";
// import Form from "./components/previewfont/previewfont.js"
// import logo from './images/main_logo.png';
import './Size.css';


class Size extends Component {
  render() {
    return (
      <div className="Size">
     <Topheader />
     <Lowerheader />
     
     <Footer />
      </div>
    );
  }
}

export default Size;