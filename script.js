function validate(form) {
  const password = form.pwd.value;
  const confirmPassword = form.Cpwd.value;

  if (password != confirmPassword) {
    alert("Error! Password did not match.");
    confirmPassword.classList.add("error");
    return false;
  } else {
    alert("Password Match. Congratulations!");
    return true;
  }
}
