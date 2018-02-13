export default class RegisterCredentials {
  constructor(input) {
    this.username = input.username.value;
    this.email = input.email.value;
    this.password = input.password.value;
    this.confirmPassword = input.confirmPassword.value;
  }
}
