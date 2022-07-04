const Manager = require("../lib/Manager");

test("makes a manager object", () => {
  const intern = new Manager("name", "id", "email", "office", "role");

  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(String));
  expect(intern.getEmail()).toEqual(expect.any(String));
  expect(intern.getOffice()).toEqual(expect.any(String));
  expect(intern.getRole()).toEqual(expect.any(String));
});
