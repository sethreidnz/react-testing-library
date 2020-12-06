import userEvent from "@testing-library/user-event";
import { render, screen, TestFinalForm } from "@utility/testing";
import { TextInputField, TextInputFieldProps } from "./TextInputField";

type TaxNumberTypeFormValues = {
  textField?: string;
};

describe("<TextInputField />", () => {
  test(`should render correctly on initial render`, () => {
    const props: TextInputFieldProps = {
      name: "textField",
      label: "Text field",
      placeholder: "Placeholder text",
      isDisabled: false,
    };
    const submitText = "Submit";
    const initialValues: TaxNumberTypeFormValues = {
      textField: "",
    };
    const errorMessage = "The field is required";
    const validateMock = jest.fn().mockImplementation(() => {
      return {
        textField: errorMessage,
      };
    });
    render(
      <TestFinalForm
        initialValues={initialValues}
        submitText={submitText}
        validate={validateMock}
        onSubmit={() => undefined}
      >
        <TextInputField {...props} />
      </TestFinalForm>
    );

    // check the input is rendering correctly before submitting
    let input = screen.getByLabelText(props.label!);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByPlaceholderText(props.placeholder!)).toBeInTheDocument();

    // check that there is no error message showing
    expect(screen.queryByRole("error")).toBeNull();
  });

  test(`should render correctly after a submit error`, () => {
    const props: TextInputFieldProps = {
      name: "textField",
      label: "Text field",
      placeholder: "Placeholder text",
      isDisabled: false,
    };
    const submitText = "Submit";
    const initialValues: TaxNumberTypeFormValues = {
      textField: "",
    };
    const errorMessage = "The field is required";
    const validateMock = jest.fn().mockImplementation(() => {
      return {
        textField: errorMessage,
      };
    });
    render(
      <TestFinalForm
        initialValues={initialValues}
        submitText={submitText}
        validate={validateMock}
        onSubmit={() => undefined}
      >
        <TextInputField {...props} />
      </TestFinalForm>
    );

    // get the button and submit the form
    const submitButton = screen.getByRole("button", { name: submitText });
    userEvent.click(submitButton);

    // check that the validateMock got called
    expect(validateMock).toHaveBeenCalledTimes(1);

    // check the input is rendering correctly for an error
    const input = screen.getByLabelText(props.label!);
    expect(input).toHaveAttribute("aria-invalid", "true");

    // check the error message is rendering correctly for an error
    expect(screen.getByRole("alert")).toHaveTextContent(errorMessage);
  });

  test(`should render correctly once focus shifts from text input`, () => {
    const props: TextInputFieldProps = {
      name: "textField",
      label: "Text field",
      placeholder: "Placeholder text",
      isDisabled: false,
    };
    const submitText = "Submit";
    const initialValues: TaxNumberTypeFormValues = {
      textField: "",
    };
    const errorMessage = "The field is required";
    const validateMock = jest.fn().mockImplementation(() => {
      return {
        textField: errorMessage,
      };
    });
    render(
      <TestFinalForm
        initialValues={initialValues}
        submitText={submitText}
        validate={validateMock}
        onSubmit={() => undefined}
      >
        <TextInputField {...props} />
      </TestFinalForm>
    );

    // right click on the submit button to move focus from the text input
    userEvent.click(
      screen.getByRole("button", { name: submitText }, { button: 2 })
    );

    // check the input is rendering correctly for an error
    const input = screen.getByLabelText(props.label!);
    expect(input).toHaveAttribute("aria-invalid", "true");

    // check the error message is rendering correctly for an error
    expect(screen.getByRole("alert")).toHaveTextContent(errorMessage);
  });

  test(`should correctly pass value to submit handler if field is valid`, () => {
    const props: TextInputFieldProps = {
      name: "textField",
      label: "Text field",
      placeholder: "Placeholder text",
      isDisabled: false,
    };
    const submitText = "Submit";
    const initialValues: TaxNumberTypeFormValues = {
      textField: "",
    };
    const errorMessage = "The field is required";
    const validateMock = jest.fn().mockImplementation(() => {
      return {}; // indicates no errors
    });
    const submitMock = jest.fn();
    const valueToType = "A text value";
    render(
      <TestFinalForm
        initialValues={initialValues}
        submitText={submitText}
        validate={validateMock}
        onSubmit={(values) => submitMock(values)}
      >
        <TextInputField {...props} />
      </TestFinalForm>
    );

    // type into the text input
    let input = screen.getByLabelText(props.label!);
    expect(input).toBeInTheDocument();
    userEvent.type(input, valueToType);

    // get the button and submit the form
    const submitButton = screen.getByRole("button", { name: submitText });
    userEvent.click(submitButton);

    // check that the validateMock got called
    expect(validateMock).toHaveBeenCalled();
    expect(submitMock).toHaveBeenCalledTimes(1);
    expect(submitMock).toHaveBeenCalledWith({
      textField: valueToType,
    });
  });
});
