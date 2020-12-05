import { render, screen } from '@utility/testing';
import { HeroBanner } from './HeroBanner';

describe('<HeroBanner />', () => {
  it('renders correctly', () => {
    render(<HeroBanner />);
    expect(
      screen.getByRole('heading', { name: 'Get certified now' })
    ).toBeInTheDocument();
  });
});
