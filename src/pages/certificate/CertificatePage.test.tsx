import { render, screen } from "@utility/testing";
import { MemoryRouter, Route } from "react-router-dom";
import { CertificatePage } from "./CertificatePage";
describe("<Certificate />", () => {
  it("renders error if companyName is not present in the url query string", () => {
    const email = "test@test.com";
    const route = `/certificate?email=${encodeURIComponent(email)}`;
    render(
      <MemoryRouter initialEntries={[route]}>
        <Route exact path="/certificate" component={CertificatePage} />
      </MemoryRouter>
    );
    expect(screen.getByText("Sorry something went wrong"));
  });

  it("renders error if email is not present in the url query string", () => {
    const companyName = "Test company";
    const route = `/certificate?companyName=${encodeURIComponent(companyName)}`;
    render(
      <MemoryRouter initialEntries={[route]}>
        <Route exact path="/certificate" component={CertificatePage} />
      </MemoryRouter>
    );
    expect(screen.getByText("Sorry something went wrong"));
  });

  it("renders correctly if it has all of the required fields in the url query string", () => {
    const companyName = "Test company";
    const email = "test@test.com";
    const route = `/certificate?companyName=${encodeURIComponent(
      companyName
    )}&email=${encodeURIComponent(email)}`;
    render(
      <MemoryRouter initialEntries={[route]}>
        <Route exact path="/certificate" component={CertificatePage} />
      </MemoryRouter>
    );
    expect(
      screen.getByText(`Company name: ${companyName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Email: ${email}`)).toBeInTheDocument();
  });
});
