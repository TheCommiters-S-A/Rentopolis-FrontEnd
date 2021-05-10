import { render, screen } from '@testing-library/react';
import {VistaPrincipal} from "../components/VistaPrincipal";
import {Footer} from "../components/Footer";



test('Properties', () => {
  render(<VistaPrincipal />);
  expect(screen.getByText(/inmuebles encontrados/i)).toBeInTheDocument();
});


test('Footer', () => {
  render(<Footer />);
  expect(screen.getByText(/Desarrolladores/i)).toBeInTheDocument();
});
