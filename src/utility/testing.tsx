import { render, RenderOptions } from "@testing-library/react";
import { Form, FormProps, AnyObject, FormRenderProps } from "react-final-form";

const AllTheProviders: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export type TestFormProps = {
  submitText: string;
  render?: (props: FormRenderProps<AnyObject>) => JSX.Element;
} & FormProps<AnyObject>;

/**
 * Wrapper form for testing react-final-form field component behavior
 */
export const TestFinalForm: React.FC<TestFormProps> = ({
  submitText,
  children,
  render,
  ...rest
}) => (
  <Form {...rest}>
    {(formProps) => (
      <form onSubmit={formProps.handleSubmit}>
        {render ? render(formProps) : children}
        <button type="submit">{submitText}</button>
      </form>
    )}
  </Form>
);

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
