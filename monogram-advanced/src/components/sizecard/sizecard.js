import React from 'react';
import PropTypes from 'prop-types';

const Sizecard = (props) => (
 
  
    <div className="col-sm-10 col-md-12 cardz">
      <div className="card border-secondary mb-3" style={{width: "100%"}}>
        <div className="card-header">
        { props.cost }
        </div>
        <div className="card-body">
          <p className={`card-text ${props.sizes.toLowerCase()} `} style={{ fontFamily: "bodoni" }}>{ props.letters }{ props.width} </p>
          <a href= "https://www.etsy.com/shop/48HourMonogram" className="btn btn-secondary"> Buy Now</a>
        </div>
      </div>
    </div>
  
);

Card.propTypes = {
  font: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fontName: PropTypes.string.isRequired,
}

export default Sizecard;