import { render, screen } from '@utility/testing';
import { HeroBanner } from './HeroBanner';

describe('<HeroBanner />', () => {
  it('renders header correctly with children with children', () => {
    render(<HeroBanner />);
    expect(
      screen.getByRole('heading', { name: 'Get certified now' })
    ).toBeInTheDocument();
  });
});
