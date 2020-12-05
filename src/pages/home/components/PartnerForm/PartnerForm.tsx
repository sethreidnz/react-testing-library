import { Form, Field } from 'react-final-form';
import { TextInput } from '@components/forms';

interface PartnerFormValues {
  companyName?: string;
  email?: string;
}

export const PartnerForm = () => {
  const onSubmit = async (values: PartnerFormValues) => {
    window.alert(JSON.stringify(values, undefined, 2));
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl">Enter your company details</h2>
          <div>
            <label className="px-1 text-sm text-gray-600">Company Name</label>
            <Field<string>
              name="companyName"
              component={TextInput}
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="px-1 text-sm text-gray-600">Company Name</label>
            <Field<string>
              name="email"
              component={TextInput}
              placeholder="Email"
            />
          </div>
          <div>
            <button
              className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
              type="submit"
              disabled={submitting || pristine}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};
