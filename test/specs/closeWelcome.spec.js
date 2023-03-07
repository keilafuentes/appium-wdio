const welcome = require("../../pageObjects/welcome.page");
const login = require("../../pageObjects/login.page");
const loginOut = require("../../pageObjects/logout.page");

describe("Close Welcome Tips Views", () => {
  it("Close Welcome", async () => {
    await welcome.nextBtn.click();
    await welcome.closeBtn.click();
  });

  it("valid login", async () => {
    login.login("keilafuentes4", "12345678@");
  });

  it("logout", async () => {
    await loginOut.menuBtn.click();
    await loginOut.logOutBtn.click();
  });
});
