const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  describe("Employee class", () => {
    it("should create an object with a name, id and email if provided valid arguments", () => {
      const emp = new Employee("Rick", 16, "Ra@gmail.com");
      expect(emp.name).toEqual("Rick");
      expect(emp.id).toEqual(16);
      expect(emp.email).toEqual("Ra@gmail.com");
    });
    it("should return name from getName()", () => {
      const testName = "Ricky";
      const emp = new Employee(testName);
      expect(emp.getName()).toBe(testName);
    });
    it("should return id from getId()", () => {
      const testId = 20;
      const emp = new Employee("rick", testId);
      expect(emp.getId()).toBe(testId);
    });
    it("should return email from getEmail()", () => {
      const testEmail = "Ra@gmail.com";
      const emp = new Employee("rick", 15, testEmail);
      expect(emp.getEmail()).toBe(testEmail);
    });
    it("should return Role from getRole()", () => {
      const testVal = "Employee";
      const emp = new Employee("rick", 15, "test@test.com");
      expect(emp.getRole()).toBe(testVal);
    });
  });
});
