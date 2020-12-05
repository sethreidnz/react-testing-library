import { render, screen } from '@utility/testing';
import { DefaultLayout } from '@components/layouts';

describe('<DefaultLayout />', () => {
  it('renders header correctly with children with children', () => {
    render(<DefaultLayout>Hello</DefaultLayout>);
    expect(
      screen.getByRole('heading', { name: 'Company Name' })
    ).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
