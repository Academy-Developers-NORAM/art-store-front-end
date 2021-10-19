import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

test('renders an email label', () => {
    render(<Contact />);
    const email = screen.getByLabelText(/Email address/i);
    expect(email).toBeInTheDocument();
})

test('types into the your name input', () => {
    render(<Contact />);
    const input = screen.getByLabelText(/Your name/i)
    userEvent.type(input, 'John')
    expect(input.value).toBe('John')
  })

  test('types into the message input', () => {
    render(<Contact />);
    const input = screen.getByLabelText(/Message/i)
    userEvent.type(input, 'Please offer a discount!')
    expect(input.value).toBe('Please offer a discount!')
  })


