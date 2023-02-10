const welcome = require("../../pageObjects/welcome.page");

describe("Close Welcome Tips Views", () => {
  it("Close Welcome", async () => {
    await welcome.nextBtn.click();
    await welcome.closeBtn.click();
  });
});
