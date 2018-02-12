import React from 'react';
import './index.css';

const Button = props => (
  <button style={props.style} className="btn">
    {props.label}
  </button>
);

export default Button;
