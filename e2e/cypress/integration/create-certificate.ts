import { HomePagePo } from "../pageObjects";

it("should be able to generate a certificate", () => {
  const companyName = "Test company";
  const email = "test@test.com";

  cy.visit("http://localhost:3000");

  // enter the details and submit the form
  HomePagePo.getCompanyNameInput().should("exist").type(companyName);
  HomePagePo.getEmailInput().should("exist").type(email);
  HomePagePo.getSubmitButton().click();

  // check that the certificate page has been loaded and we have the values we put in on the page
  cy.location("href").should("contain", "/certificate");
  cy.findByText(`Company name: ${companyName}`).should("exist");
  cy.findByText(`Email: ${email}`).should("exist");
});
