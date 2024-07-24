describe("Complex Reqres API Automation Test", () => {
  const apiUrl = "https://reqres.in/api";

  it("should fetch all users from page 2 and verify pagination", () => {
    cy.request("GET", `${apiUrl}/users?page=2`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("page", 2);
      expect(response.body).to.have.property("per_page");
      expect(response.body).to.have.property("total");
      expect(response.body).to.have.property("total_pages");
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
    });
  });

  it("should create a new user and verify authentication", () => {
    const newUser = {
      name: "John Doe",
      job: "Software Developer",
    };
    cy.request("POST", `${apiUrl}/users`, newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
      expect(response.body.name).to.eq(newUser.name);
      expect(response.body.job).to.eq(newUser.job);
    });

    const loginDetails = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    cy.request("POST", `${apiUrl}/login`, loginDetails).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  it("should update a user and verify fields", () => {
    const updatedUser = {
      name: "Jane Doe",
      job: "Project Manager",
    };

    cy.request("PUT", `${apiUrl}/users/2`, updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedUser.name);
      expect(response.body.job).to.eq(updatedUser.job);
      expect(response.body).to.have.property("updatedAt");
    });
  });

  it("should delete a user and handle non-existing user gracefully", () => {
    cy.request('DELETE', `${apiUrl}/users/2`).then((response) => {
      expect(response.status).to.eq(204);
    });
    cy.request({
      method: "DELETE",
      url: `${apiUrl}/users/999`,
      failsOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("should handle authentication errors", () => {
    const invalidLoginDetails = {
      email: "peter@klaven",
    };

    cy.request({
      method: "POST",
      url: `${apiUrl}/login`,
      body: invalidLoginDetails,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error", "Missing password");
    });
  });

  it("should handle registration errors", () => {
    const invalidRegistrationDetails = {
      email: `sydney@fife`,
    };

    cy.request({
      method: "POST",
      url: `${apiUrl}/register`,
      body: invalidRegistrationDetails,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error", "Missing password");
    });
  });
});
