import { render, screen, within } from "@utility/testing";
import { BenefitsRow } from "./BenefitsRow";
describe("<BenefitsRow />", () => {
  test(`should render correctly on initial render`, () => {
    render(<BenefitsRow />);

    const firstHeading = screen.getByRole("heading", {
      name: "Get Recognised",
    });
    expect(firstHeading).toBeInTheDocument();
    expect(firstHeading.nextSibling).toHaveTextContent(
      "These days it's hard to stand out. With this certification you will have no problems."
    );

    const secondHeading = screen.getByRole("heading", {
      name: "Priority Access",
    });
    expect(secondHeading).toBeInTheDocument();
    expect(secondHeading.nextSibling).toHaveTextContent(
      "Get access to the experts right away. We are here to help you deliver value."
    );

    const thirdHeading = screen.getByRole("heading", {
      name: "Extra sales",
    });
    expect(thirdHeading).toBeInTheDocument();
    expect(thirdHeading.nextSibling).toHaveTextContent(
      "Sometimes we will need our partners to help us deliver something for a customer. Being certified means you may be given work."
    );
  });
});
