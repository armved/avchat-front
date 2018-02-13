import React from 'react';
import './index.css';

const Button = props => (
  <button type={props.type} style={props.style} className="btn" {...props}>
    {props.label}
  </button>
);

export default Button;
