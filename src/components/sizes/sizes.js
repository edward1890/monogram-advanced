import React, { Component } from "react";
import Sizecard from '../sizecard/sizecard';

import '../sizecard/sizecard.css';

import './sizes.css'

class Size extends Component {
    // Setting the component's initial state
    constructor(props) {
        super(props);

        this.sizes = [
            {letters: "1 To 3 Letters", width: "12 Inches", cost: "$14.99"},
            {letters: "1 To 3 Letters", width: "24 Inches", cost: "$39.99"},
            {letters: "1 To 3 Letters", width: "36 Inches", cost: "$54.99"},
            {letters: "4 To 8 Letters", width: "24 Inches", cost: "$39.99"},
            {letters: "4 To 8 Letters", width: "36 Inches", cost: "$49.99"},
            {letters: "4 To 8 Letters", width: "42 Inches", cost: "$74.99"},
            {letters: "4 To 8 Letters", width: "48 Inches", cost: "$109.99"},
            {letters: "4 To 8 Letters", width: "55 Inches", cost: "$139.99"},
            {letters: "9 To 12 Letters", width: "36 Inches", cost: "$49.99"},
            {letters: "9 To 12 Letters", width: "42 Inches", cost: "$74.99"},
            {letters: "9 To 12 Letters", width: "48 Inches", cost: "$109.99"},
            {letters: "9 To 12 Letters", width: "55 Inches", cost: "$139.99"}
        ]
    }

    render() {
    
        return (

        <div className="container-fluid">
            <div className= "row">
            { this.sizes.map((sizes, index) => (

                         
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