class Welcome {
  get nextBtn() {
    return $(
      '//android.widget.FrameLayout[@resource-id="com.clarord.miclaro:id/next_tip"]'
    );
  }
  get closeBtn() {
    return $(
      '//android.widget.Button[@resource-id="com.clarord.miclaro:id/close_tips"]'
    );
  }
}

module.exports = new Welcome();
