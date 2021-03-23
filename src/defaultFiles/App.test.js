import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders initial page', () => {
  render(<App />);
  expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
});
