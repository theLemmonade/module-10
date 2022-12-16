const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  describe("Intern class", () => {
    it("Should return the School from constructor", () => {
      const testSchool = "Uconn";
      const int = new Intern("Rick", 16, "Ra@gmail.com", testSchool);
      expect(int.school).toEqual(testSchool);
    });
    it("should return school name from getSchool()", () => {
      const testSchool = "Uconn";
      const int = new Intern("Rick", 16, "Ra@gmail.com", testSchool);
      expect(int.getSchool()).toBe(testSchool);
    });
    it("should return role from getRole()", () => {
      const testVal = "Intern";
      const int = new Intern("Rick", 16, "Ra@gmail.com", "Eaponte2");
      expect(int.getRole()).toBe(testVal);
    });
  });
});
