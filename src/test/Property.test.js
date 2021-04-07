import { render, screen } from '@testing-library/react';
import {Property} from "../components/Property";
import {VistaPrincipal} from "../components/VistaPrincipal";
import {Footer} from "../components/Footer";


test('Property', () => {
  render(<Property />);
  expect(screen.getByText(/Baños/i)).toBeInTheDocument();

});

test('Properties', () => {
  render(<VistaPrincipal />);
  expect(screen.getByText(/inmuebles encontrados/i)).toBeInTheDocument();
});


test('Footer', () => {
  render(<Footer />);
  expect(screen.getByText(/Desarrolladores/i)).toBeInTheDocument();
});
