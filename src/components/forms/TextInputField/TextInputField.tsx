import { Field } from "react-final-form";

export type TextInputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  maxLength?: number;
};

export const TextInputField = ({
  name,
  label,
  placeholder,
  required,
  isDisabled,
  maxLength = 255,
}: TextInputFieldProps) => (
  <>
    <label htmlFor={name} className="px-1 text-sm text-gray-600">
      {label}
    </label>
    <Field<string>
      name={name}
      render={({ input, meta: { error, touched, submitting } }) => (
        <>
          <input
            id={name}
            className="text-md block px-3 py-2 rounded-lg w-full
              bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
            type="text"
            maxLength={maxLength}
            aria-required={required}
            aria-invalid={error && touched}
            placeholder={placeholder}
            disabled={isDisabled || submitting}
            {...input}
          />

          {error && touched ? <p role="alert">{error}</p> : null}
        </>
      )}
      placeholder={placeholder ? placeholder : undefined}
    />
  </>
);
