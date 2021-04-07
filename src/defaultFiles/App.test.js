import { render, screen } from '@testing-library/react';
import App from '../App';
import  { toBeInTheDocument } from '@testing-library/jest-dom';

test('renders initial page', () => {
  render(<App />);
  const element = screen.getByText(/iniciar sesión/i);
  expect(element).toBeInTheDocument();
});
