class Login {
  get userNameField() {
    return $(
      '//android.widget.EditText[@resource-id="com.clarord.miclaro:id/username_view"]'
    );
  }
  get passwordField() {
    return $(
      '//android.widget.EditText[@resource-id="com.clarord.miclaro:id/password_view"]'
    );
  }
}

module.exports = new Login();
