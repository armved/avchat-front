import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isFieldInvalid from '../../utils/validator';
import Input from '../Input';
import Button from '../Button';
import './index.css';
import LoginCredentials from '../../DTOs/LoginCredentials';

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

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      loginForm: {
        username: {
          value: '',
          invalid: false,
        },
        password: {
          value: '',
          invalid: false,
        },
      },
    };
  }

  onInputChange(event) {
    const invalid = isFieldInvalid(event, this.state.registerForm);

    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [event.target.id]: {
          value: event.target.value,
          invalid,
        },
      },
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const credentials = new LoginCredentials(this.state.loginForm);
    console.log(credentials);
  }

  render() {
    return (
      <div className="form-page-wrapper">
        <div className="form-box">
          <div className="title">Login</div>
          <form id="loginForm" onSubmit={e => this.onSubmit(e)}>
            <Input
              onChange={e => this.onInputChange(e)}
              value={this.state.loginForm.username.value}
              showError={this.state.loginForm.username.invalid}
              style={inputStyle}
              label="Username"
              id="username"
            />
            <Input
              onChange={e => this.onInputChange(e)}
              value={this.state.loginForm.password.value}
              showError={this.state.loginForm.password.invalid}
              style={inputStyle}
              label="Password"
              id="password"
              type="password"
            />
          </form>
          <div className="form-controls">
            <Button
              form="loginForm"
              type="submit"
              style={loginBtnStyle}
              label="Login"
            />
            <Link style={registerBtnStyle} to="register">
              <Button label="Register" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
