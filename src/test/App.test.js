import { render, screen } from '@testing-library/react';
import {InmuebleEspecifico} from "../components/InmuebleEspecifico";

test('Inmueble especifico', () => {
  render(<InmuebleEspecifico />);
  const linkElement = screen.getByText(/Arriendo/i);
  expect(linkElement).toBeInTheDocument();
});
