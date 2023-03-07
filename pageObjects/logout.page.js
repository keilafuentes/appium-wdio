class LoginOut {
  get menuBtn() {
    return $('//android.widget.ImageButton[@content-desc="Mi Claro"]');
  }
  get logOutBtn() {
    return $(
      '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.clarord.miclaro:id/logout_menu_option"]'
    );
  }
}

module.exports = new LoginOut();
