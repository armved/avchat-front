import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterCredentials from '../../DTOs/RegisterCredentials';
import isFieldInvalid from '../../utils/validator';
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

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      registerForm: {
        username: {
          value: '',
          invalid: true,
        },
        email: {
          value: '',
          invalid: false,
        },
        password: {
          value: '',
          invalid: false,
        },
        confirmPassword: {
          value: '',
          invalid: false,
        },
        invalid: true,
      },
    };
  }

  onInputChange(event) {
    const invalid = isFieldInvalid(event, this.state.registerForm);
    const formInvalid = invalid ? true : this.state.registerForm.invalid;

    this.setState({
      registerForm: {
        ...this.state.registerForm,
        [event.target.id]: {
          value: event.target.value,
          invalid,
        },
        invalid: formInvalid,
      },
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const credentials = new RegisterCredentials(this.state.registerForm);
    console.log(credentials);
  }

  render() {
    return (
      <div className="form-page-wrapper">
        <div className="form-box">
          <div className="title">Register</div>
          <form id="registerForm" onSubmit={e => this.onSubmit(e)}>
            <Input
              onChange={e => this.onInputChange(e)}
              value={this.state.registerForm.username.value}
              style={inputStyle}
              showError={this.state.registerForm.username.invalid}
              label="Username"
              id="username"
            />
            <Input
              onChange={e => this.onInputChange(e)}
              value={this.state.registerForm.email.value}
              showError={this.state.registerForm.email.invalid}
              style={inputStyle}
              label="Email"
              id="email"
              type="email"
            />
            <Input
              onChange={e => this.onInputChange(e)}
              value={this.state.registerForm.password.value}
              showError={this.state.registerForm.password.invalid}
              style={inputStyle}
              label="Password"
              id="password"
              type="password"
            />
            <Input
              onChange={e => this.onInputChange(e)}
              value={this.state.registerForm.confirmPassword.value}
              showError={this.state.registerForm.confirmPassword.invalid}
              style={inputStyle}
              label="Confirm Password"
              id="confirmPassword"
              type="password"
            />
          </form>
          <div className="form-controls">
            <Button
              form="registerForm"
              style={registerBtnStyle}
              label="Register"
              disabled={this.state.registerForm.invalid}
            />
            <Link style={backBtnStyle} to="/">
              <Button label="Back" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
