import { render, screen } from '@testing-library/react';
import Footer from './Footer';


test('Footer.js renders store', () => {
  render(<Footer />);
  const testFooterText = screen.getByText(/Contact Us/i);
  expect(testFooterText).toBeInTheDocument();
});