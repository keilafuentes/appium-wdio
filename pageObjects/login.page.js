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
  get loginBtn() {
    return $(
      '//android.widget.Button[@resource-id="com.clarord.miclaro:id/full_login_button"]'
    );
  }
  get invalidMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }
  get acceptBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }
  async login(username, password) {
    await this.userNameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginBtn.click();
  }
}

module.exports = new Login();
