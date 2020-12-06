import { MemoryRouter, Route } from "react-router-dom";
import { Location, LocationState } from "history";
import { render, screen } from "@utility/testing";
import { PartnerForm } from "./PartnerForm";
import userEvent from "@testing-library/user-event";
describe("<TextInputField />", () => {
  test(`should render correctly on initial render`, () => {
    render(<PartnerForm />);
    expect(screen.getByLabelText("Company name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test(`should redirect to certificate page with correct values`, async () => {
    const companyName = "Test company";
    const email = "test@test.com";
    // render app with catch all route to set location for later inspection as per https://reacttraining.com/react-router/web/guides/testing/checking-location-in-tests
    let location: Location<LocationState> | undefined;
    render(
      <MemoryRouter>
        <Route exact path="/" component={PartnerForm} />
        <Route
          path="*"
          render={({ location: l }) => {
            location = l;
            return null;
          }}
        />
      </MemoryRouter>
    );

    // type in the values
    userEvent.type(screen.getByLabelText("Company name"), companyName);
    userEvent.type(screen.getByLabelText("Email"), email);

    // click submit
    userEvent.click(screen.getByRole("button"));

    // check that the redirect was correctly done
    expect(location?.pathname).toEqual("/certificate");
    expect(location?.search).toEqual(
      `?companyName=${encodeURIComponent(
        companyName
      )}&email=${encodeURIComponent(email)}`
    );
  });
});
