import React, { Component } from "react";
import Sizecard from '../sizecard/sizecard';

import '../sizecard/sizecard.css';

import './sizes.css'

class Size extends Component {
    // Setting the component's initial state
    constructor(props) {
        super(props);

        this.sizes = [
            {letters: "1 to 3", width: "12", cost: "$14.99"},
            {letters: "1 to 3", width: "24", cost: "$39.99"},
            {letters: "1 to 3", width: "36", cost: "$54.99"},
            {letters: "4 to 8", width: "24", cost: "$39.99"},
            {letters: "4 to 8", width: "36", cost: "$49.99"},
            {letters: "4 to 8", width: "42", cost: "$74.99"},
            {letters: "4 to 8", width: "48", cost: "$109.99"},
            {letters: "4 to 8", width: "55", cost: "$139.99"},
            {letters: "9 to 12", width: "36", cost: "$49.99"},
            {letters: "9 to 12", width: "42", cost: "$74.99"},
            {letters: "9 to 12", width: "48", cost: "$109.99"},
            {letters: "9 to 12", width: "55", cost: "$139.99"}
        ]
    }

    render() {
    
        return (

        <div className="container-fluid">
            <div className= "row">
            { this.sizes.map((cost, index) => (

                         
            <div key={ index } className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="row">
     

                <Sizecard
                    letters= { sizes.letters }
                    width={ sizes.width }
                    cost={ sizes.cost}
                />
     
            </div>
          </div>
      ))}
 
  

    </div></div>
        );

    }







}
export default Size;