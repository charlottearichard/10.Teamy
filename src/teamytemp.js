const generateTeamy = (team) => {
  // generate Manager
  const generateM = (manager) => {
    return `
        <h1> Manager </h1> 
        <h2> ${manager.getName()}</h2> 
        <ul>
            <li>ID: ${manager.getId()}</li>
            <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li>Office number: ${manager.getOffice()}</li>
        </ul> 
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateM(manager))
  );
};
