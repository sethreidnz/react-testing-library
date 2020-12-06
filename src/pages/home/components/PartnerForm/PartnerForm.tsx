import { Form } from "react-final-form";
import { useHistory } from "react-router-dom";
import { TextInputField } from "@components/forms";
import { generateQueryString } from "@utility/queryString";

interface PartnerFormValues {
  companyName?: string;
  email?: string;
}

export const PartnerForm = () => {
  const history = useHistory();
  const onSubmit = async (values: PartnerFormValues) => {
    const search = generateQueryString(values);
    history.push({ pathname: "/certificate", search });
  };
  const validate = (values: PartnerFormValues) => {
    const errors: PartnerFormValues = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.companyName) {
      errors.companyName = "Company name is required";
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
