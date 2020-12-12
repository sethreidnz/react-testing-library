import { render } from "@testing-library/react";
import { FileUploadField, FileUploadFieldProps } from "@components/forms";
import { TestFinalForm } from "@utility/testing";

type FileUploadFieldFormValues = {
  fileField?: string;
};

describe("<FileUploadField />", () => {
  it("should pass file to onChange handler correctly after a user uploads a file", () => {
    const submitText = "Submit";
    const initialValues: FileUploadFieldFormValues = {
      fileField: "",
    };
    const props: FileUploadFieldProps = {
      name: "textField",
      label: "Text field",
      isDisabled: false,
    };
    render(
      <TestFinalForm
        initialValues={initialValues}
        submitText={submitText}
        validate={() => undefined}
        onSubmit={() => undefined}
      >
        <FileUploadField {...props} />
      </TestFinalForm>
    );
  });
});
