import { render, screen } from "@utility/testing";
import { Certificate, CertificateProps } from "./Certificate";
describe("<Certificate />", () => {
  it("should render the values in the certificate correctly", () => {
    const props: CertificateProps = {
      companyName: "Test company",
      email: "test@test.com",
    };
    render(<Certificate {...props} />);
    expect(
      screen.getByText(`Company name: ${props.companyName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Email: ${props.email}`)).toBeInTheDocument();
  });
});
