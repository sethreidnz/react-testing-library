import { Form } from "react-final-form";
import { TextInputField, FileUploadField } from "@components/forms";

interface PartnerFormValues {
  companyName?: string;
  email?: string;
  logo?: string;
}

export const PartnerForm = () => {
  const onSubmit = async (values: PartnerFormValues) => {};
  const validate = (values: PartnerFormValues) => {
    const errors: PartnerFormValues = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.companyName) {
      errors.companyName = "Company name is required";
    }
    if (!values.logo) {
      errors.logo = "Company logo is required";
    }
    return errors;
  };
  return (
    <Form
      onSubmit={(values) => onSubmit(values)}
      validate={(values) => validate(values)}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl">Enter your company details</h2>
          <div>
            <TextInputField
              name={"companyName"}
              label={"Company name"}
              placeholder={"Company name"}
              isDisabled={submitting}
            />
          </div>
          <div>
            <TextInputField
              name={"email"}
              label={"Email"}
              placeholder={"Email"}
              isDisabled={submitting}
            />
          </div>
          <div>
            <FileUploadField
              name={"logo"}
              label={"Upload company logo"}
              isDisabled={submitting}
            />
          </div>
          <div>
            <button
              className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};
