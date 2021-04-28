import { render, screen } from '@testing-library/react';
import {InmuebleEspecifico} from "../components/InmuebleEspecifico";
import {HeaderSimple} from "../components/HeaderSimple";
import {Property} from "../components/Property";
import {VistaPrincipal} from "../components/VistaPrincipal";
import {Footer} from "../components/Footer";

test('Inmueble especifico', () => {
  render(<InmuebleEspecifico />);
  const linkElement = screen.getByText(/Arriendo/i);
  expect(linkElement).toBeInTheDocument();
});

test('Header simple', () => {
  render(<HeaderSimple />);
  const linkElement = screen.getByText(/Rentopolis/i);
  expect(linkElement).toBeInTheDocument();
});


test('Header simple', () => {
  render(<HeaderSimple />);
  const linkElement = screen.getByText(/Rentopolis/i);
  expect(linkElement).toBeInTheDocument();
});

test('Property', () => {
  render(<Property />);
  expect(screen.getByText(/Baños/i)).toBeInTheDocument();

});

test('Property 2', () => {
  render(<Property />);
  expect(screen.getByAltText (/imagen/i)).toBeInTheDocument();

});

test('Properties', () => {
  render(<VistaPrincipal />);
  expect(screen.getByText(/inmuebles encontrados/i)).toBeInTheDocument();
});


test('Footer', () => {
  render(<Footer />);
  expect(screen.getByText(/Desarrolladores/i)).toBeInTheDocument();
});
