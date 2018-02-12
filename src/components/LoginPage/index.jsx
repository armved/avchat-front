import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import './index.css';

const loginBtnStyle = {
  width: '70%',
  marginRight: '4px',
};

const registerBtnStyle = {
  width: '30%',
  marginLeft: '4px',
};

const inputStyle = {
  width: '300px',
};

const LoginPage = () => (
  <div className="form-page-wrapper">
    <div className="form-box">
      <div className="title">Login</div>
      <form>
        <Input style={inputStyle} label="Username" id="username" />
        <Input
          style={inputStyle}
          label="Password"
          id="password"
          type="password"
        />
      </form>
      <div className="form-controls">
        <Button style={loginBtnStyle} label="Login" />
        <Link style={registerBtnStyle} to="register">
          <Button label="Register" />
        </Link>
      </div>
    </div>
  </div>
);

export default LoginPage;
