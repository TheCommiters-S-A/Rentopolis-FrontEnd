import { render, screen } from '@testing-library/react';
import {Profile} from "../components/profile/Profile";
import{Property} from "../components/Property";
import{VistaPrincipal} from "../components/VistaPrincipal";
import '@testing-library/jest-dom/extend-expect';

test('Profile Simple', () => {
    render(<Profile />);
    const linkElement = screen.getByText(/Nombre/i);
    expect(linkElement).toBeInTheDocument();
  });

test('Property Simple', () => {
  render(<Property />);
  const linkElement = screen.getByText(/Baños/i);
  expect(linkElement).toBeInTheDocument();
});

test('Properties', () => {
  render(<VistaPrincipal />);
  expect(screen.getByText(/inmuebles encontrados/i)).toBeInTheDocument();
});
