const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  describe("Manager class", () => {
    it("Should return the OfficeNumber from constructor", () => {
      const testOfficNum = 13;
      const man = new Manager("Rick", 16, "Ra@gmail.com", testOfficNum);
      expect(man.officeNumber).toEqual(testOfficNum);
    });
    it("should return office number from getOfficeNumber()", () => {
      const testOfficNum = 13;
      const man = new Manager("Rick", 16, "Ra@gmail.com", testOfficNum);
      expect(man.getOfficeNumber()).toBe(testOfficNum);
    });
    it("should return role from getRole()", () => {
      const testVal = "Manager";
      const man = new Manager("Rick", 16, "Ra@gmail.com", "Eaponte2");
      expect(man.getRole()).toBe(testVal);
    });
  });
});
