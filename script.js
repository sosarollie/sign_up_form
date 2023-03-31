function validate(form) {
  const password = form.pwd.value;
  const confirmPassword = form.Cpwd.value;

  if (password != confirmPassword) {
    alert("Error! Password did not match.");
    return false;
  } else {
    return true;
  }
}