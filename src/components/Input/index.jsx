import React from 'react';
import './index.css';

const Input = props => (
  <div className="form-input-wrapper">
    <input
      placeholder={props.label}
      className="form-input"
      style={props.style}
      id={props.id}
      type={props.type || 'text'}
    />
  </div>
);

export default Input;
