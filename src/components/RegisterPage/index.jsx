import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import './index.css';

const backBtnStyle = {
  width: '30%',
  marginLeft: '4px',
};

const registerBtnStyle = {
  width: '70%',
  marginRight: '4px',
};

const inputStyle = {
  width: '300px',
};

const RegisterPage = () => (
  <div className="form-page-wrapper">
    <div className="form-box">
      <div className="title">Register</div>
      <form>
        <Input style={inputStyle} label="Username" id="username" />
        <Input style={inputStyle} label="Email" id="email" />
        <Input
          style={inputStyle}
          label="Password"
          id="password"
          type="password"
        />
        <Input
          style={inputStyle}
          label="Confirm Password"
          id="confirm-password"
          type="password"
        />
      </form>
      <div className="form-controls">
        <Button style={registerBtnStyle} label="Register" />
        <Link style={backBtnStyle} to="/">
          <Button label="Back" />
        </Link>
      </div>
    </div>
  </div>
);

export default RegisterPage;
