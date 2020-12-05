import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
