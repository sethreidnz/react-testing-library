class HomePagePo {
  getCompanyNameInput() {
    return cy.findByLabelText("Company name");
  }
  getEmailInput() {
    return cy.findByLabelText("Email");
  }
  getSubmitButton() {
    return cy.findByRole("button", { name: "Submit" });
  }
}
export default new HomePagePo();
