const Intern = require("../lib/Intern.js");

test("makes an intern object", () => {
  const intern = new Intern("name", "id", "email", "uni", "role");

  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(String));
  expect(intern.getEmail()).toEqual(expect.any(String));
  expect(intern.getUni()).toEqual(expect.any(String));
  expect(intern.getRole()).toEqual(expect.any(String));
});
