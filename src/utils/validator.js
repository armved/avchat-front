const isFieldInvalid = (event, form) => {
  // Empty Field
  if (!event.target.value) {
    return true;
  }

  // Spaces
  if (event.target.value.includes(' ')) {
    return true;
  }

  // Username and email min length
  if (event.target.id === 'username' || event.target.id === 'email') {
    if (event.target.value.length < 2) {
      return true;
    }
  }

  // Email
  if (event.target.id === 'email') {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const invalid = !re.test(String(event.target.value).toLowerCase());
    if (invalid) {
      return true;
    }
  }

  // Password min length
  if (event.target.id === 'password') {
    if (event.target.value.length < 6) {
      return true;
    }
  }

  // Passwords match
  if (event.target.id === 'confirmPassword') {
    if (event.target.value !== form.password.value) {
      return true;
    }
  }

  return false;
};

export default isFieldInvalid;
