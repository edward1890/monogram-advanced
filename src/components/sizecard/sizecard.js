import React from 'react';
import PropTypes from 'prop-types';
import './sizecard.css'
const Sizecard = (props) => (
 
  
    <div className="col-sm-10 col-md-12 cardz">
      <div className="card border-secondary mb-3" style={{width: "100%"}}>
        <div className="card-header">
        { props.letters }
        </div>
        <div className="card-body">
          <p className="chooser" style={{fontFamily: 'bodoni'}}>{ props.width} </p>
          <p className="chooser2" style={{fontFamily: 'bodoni'}}>{ props.cost} </p>
          <a href= "https://www.etsy.com/shop/48HourMonogram" className="btn btn-secondary"> Buy Now</a>
          
        </div>
      </div>
    </div>
  
);

Sizecard.propTypes = {
  letters: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
}

export default Sizecard;