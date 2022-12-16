const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  describe("Engineer class", () => {
    it("Should return the GitHub account", () => {
      const testGithub = "Eaponte2";
      const eng = new Engineer("Rick", 16, "Ra@gmail.com", testGithub);
      expect(eng.github).toEqual(testGithub);
    });
    it("should return github from getGithub()", () => {
      const testGithub = "Eaponte2";
      const eng = new Engineer("Rick", 16, "Ra@gmail.com", testGithub);
      expect(eng.getGithub()).toBe(testGithub);
    });
    it("should return role from getRole()", () => {
      const testVal = "Engineer";
      const eng = new Engineer("Rick", 16, "Ra@gmail.com", "Eaponte2");
      expect(eng.getRole()).toBe(testVal);
    });
  });
});
