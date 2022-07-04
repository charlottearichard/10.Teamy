const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, uni) {
    super(name, id, email);
    this.uni = uni;
  }
  getUni() {
    return this.uni;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
