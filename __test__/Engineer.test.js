const Engineer = require("../lib/Engineer.js");

test("makes an engineer object", () => {
  const intern = new Engineer("name", "id", "email", "git", "role");

  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(String));
  expect(intern.getEmail()).toEqual(expect.any(String));
  expect(intern.getGit()).toEqual(expect.any(String));
  expect(intern.getRole()).toEqual(expect.any(String));
});
