import { render, screen, fireEvent  } from '@testing-library/react';
import {Profile} from "../components/profile/Profile";
import{Property} from "../components/Property";
import{VistaPrincipal} from "../components/VistaPrincipal";
import '@testing-library/jest-dom/extend-expect';

test('Profile Simple', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});
/*
test('Property Simple', () => {
  render(<Property />);
  const linkElement = screen.getByText(/Baños/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('Properties', () => {
  render(<VistaPrincipal />);
  expect(screen.getByText(/inmuebles encontrados/i)).toBeInTheDocument();
});

it('should call onChange prop with input value', () => {
  const { container, getByLabelText } = render(<Profile />);
  const searchInput = getByLabelText(/Contraseña nueva/i);
  const query = 'nirvana';

  const mockChange = jest.fn()
  searchInput.onChange = mockChange;
  fireEvent.change(searchInput, { target: { value: 'doe' } });
  expect(searchInput.value).toEqual('doe');
  fireEvent.change(searchInput, { target: { value: query } });
  fireEvent.change(searchInput, { target: { value: 'doe' } });
  fireEvent.change(searchInput, { target: { value: query } });
  
});