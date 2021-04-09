import { render, screen,cleanup } from '@testing-library/react';
import {Profile} from "../components/profile/Profile";
import{Property} from "../components/Property";
import{VistaPrincipal} from "../components/VistaPrincipal";
import '@testing-library/jest-dom/extend-expect';
import mockedAxios from 'axios';


afterEach(cleanup);
test('mocking axios request', async () => {
  const data = {
  data: [
   {
     id: 1,
     title: 'title 1'
   },
   {
     id: 2,
     title: 'title 2'
   },
   {
     id: 3,
     title: 'mocked title'
  }]
  };
  mockedAxios.get;
});

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
