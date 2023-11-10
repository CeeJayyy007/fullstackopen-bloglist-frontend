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

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.contains("Login").click();
      cy.get("#username").type("James");
      cy.get("#password").type("000000");
      cy.get("#login-button").click();
      cy.contains("James Bond logged in");
    });

    it("fails with wrong credentials", function () {
      cy.contains("Login").click();
      cy.get("#username").type("James");
      cy.get("#password").type("123456");
      cy.get("#login-button").click();
      cy.contains("Wrong username or password")
        .and("have.css", "color", "rgb(255, 0, 0)")
        .and("have.css", "border-style", "solid");
    });
  });
});
