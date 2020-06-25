class Validator {
  static REQUIRED = 'REQUIRED'; 
  static MIN_LENGTH = 'MIN_LENGTH';
  static validate(value, flag, validatorValue) {

  }
}

class User {}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signupHandler.bind(this));
  }

  signupHandler(event) {
    event.preventDefault();
    const enteredUsername = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;
  }
}
