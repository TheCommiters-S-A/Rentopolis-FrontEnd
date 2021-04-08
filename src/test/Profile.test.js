import { render, screen } from '@testing-library/react';
import {Profile} from "../components/profile";


test('Header simple', () => {
    render(<Profile />);
    const linkElement = screen.getByText(/Nombre/i);
    expect(linkElement).toBeInTheDocument();
  });