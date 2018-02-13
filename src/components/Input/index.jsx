import React from 'react';
import './index.css';

const Input = props => (
  <div className="form-input-wrapper">
    <input
      placeholder={props.label}
      className={`form-input ${props.showError ? 'input-red' : 'input-blue'}`}
      style={props.style}
      onChange={e => props.onChange(e)}
      id={props.id}
      value={props.value}
      type={props.type || 'text'}
    />
  </div>
);

export default Input;
