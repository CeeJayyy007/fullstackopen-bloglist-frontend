describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    const user = {
      name: "James Bond",
      username: "James",
      password: "000000",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/users`, user);
    cy.visit("http://localhost:5173");
  });

  it("login form is shown", function () {
    cy.contains("Blogs");
    cy.contains("Login").click();
  });
});
